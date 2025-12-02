// scripts.js: validación básica y fallback por mailto cuando no hay backend.
// El formulario ahora construye un mailto: que abre el cliente de correo del usuario.
// Asegúrate de reemplazar la dirección en data-email del form por la tuya.
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const mailtoLinkEl = document.getElementById('mailto-link');

  if (!form) return;

  // Actualiza el enlace mailto visible (aside) si apruebas otra dirección
  const configuredEmail = form.getAttribute('data-email') || (mailtoLinkEl && mailtoLinkEl.getAttribute('href').replace('mailto:', ''));
  if (mailtoLinkEl && configuredEmail) {
    mailtoLinkEl.setAttribute('href', `mailto:${configuredEmail}`);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = 'Preparando tu cliente de correo...';

    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Por favor completa todos los campos.';
      return;
    }

    // Construimos el mailto con asunto y cuerpo
    const mailto = (configuredEmail || '') +
      '?subject=' + encodeURIComponent(`Contacto desde portfolio: ${name}`) +
      '&body=' + encodeURIComponent(`Nombre: ${name}
Email: ${email}

Mensaje:
${message}`);

    // Intenta abrir el cliente de correo
    try {
      // window.location.href abrirá el cliente por defecto
      window.location.href = `mailto:${mailto}`;
      status.textContent = 'Se abrirá tu cliente de correo para enviar el mensaje. Si no se abre, copia el email y envíalo manualmente.';
      form.reset();
    } catch (err) {
      console.error(err);
      status.textContent = 'No se pudo abrir el cliente de correo. Por favor, envía un email manualmente a ' + (configuredEmail || 'tu@email');
    }
  });
});