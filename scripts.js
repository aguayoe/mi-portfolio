document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const mailtoLinkEl = document.getElementById('mailto-link');

  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  const overlay = document.getElementById('nav-overlay');

  function openNav() {
    document.body.classList.add('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
    if (overlay) overlay.hidden = false;
  }

  function closeNav() {
    document.body.classList.remove('nav-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.hidden = true;
  }

  if (overlay) overlay.hidden = true;

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = document.body.classList.contains('nav-open');
      if (isOpen) closeNav();
      else openNav();
    });

    if (overlay) overlay.addEventListener('click', closeNav);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    nav.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', closeNav);
    });
  }

  if (form) {
    const configuredEmail =
      form.getAttribute('data-email') ||
      (mailtoLinkEl && mailtoLinkEl.getAttribute('href') && mailtoLinkEl.getAttribute('href').replace('mailto:', ''));

    if (mailtoLinkEl && configuredEmail) {
      mailtoLinkEl.setAttribute('href', `mailto:${configuredEmail}`);
      mailtoLinkEl.textContent = configuredEmail;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (status) status.textContent = 'Preparando tu cliente de correo...';

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        if (status) status.textContent = 'Por favor completa todos los campos.';
        return;
      }

      const mailto =
        (configuredEmail || '') +
        '?subject=' +
        encodeURIComponent(`Contacto desde portfolio: ${name}`) +
        '&body=' +
        encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`);

      try {
        window.location.href = `mailto:${mailto}`;
        if (status) status.textContent = 'Se abrirá tu cliente de correo para enviar el mensaje.';
        form.reset();
      } catch (err) {
        console.error(err);
        if (status) status.textContent = 'No se pudo abrir el cliente de correo. Envía un email manualmente.';
      }
    });
  }

  const scrollTopBtn = document.getElementById('scroll-top');
  function updateScrollTopBtn() {
    if (!scrollTopBtn) return;
    if (window.scrollY > 450) scrollTopBtn.classList.add('is-visible');
    else scrollTopBtn.classList.remove('is-visible');
  }
  updateScrollTopBtn();
  window.addEventListener('scroll', updateScrollTopBtn, { passive: true });
});
