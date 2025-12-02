# Portfolio para GitHub Pages

Plantilla lista para publicar en GitHub Pages. Incluye:
- Secciones: Proyectos, Cursos, Sobre mí, Contacto.
- Formulario de contacto con fallback vía mailto: (abre el cliente de correo del usuario).
- Enlaces a redes sociales.

Pasos rápidos para publicar en GitHub Pages
1. Crea un repositorio en GitHub (`aguayoe/mi-portfolio` ya existe).
2. Copia los archivos `index.html`, `styles.css`, `scripts.js` y `TuCV.pdf` (opcional) al repo.
3. Empuja a la rama `main`.
4. Ve a Settings > Pages y activa Pages desde la rama `main` y carpeta `/ (root)`. En unos minutos tu sitio estará activo en la URL indicada.

Contacto: mailto fallback
- El formulario ya no usa servicios externos. En su lugar abre el cliente de correo del usuario con un mailto prellenado.
- Reemplaza la dirección en el atributo `data-email` del form en `index.html` por tu email real:
  <form id="contact-form" data-email="tu@email.com">

Opciones futuras
- Si prefieres tener envíos almacenados (sin abrir cliente), puedes usar:
  - un endpoint en Netlify Functions o similar,
  - servicios como Formspree/Getform/EmailJS,
  - o recibir los mensajes a través de un webhook que almacene en una hoja de cálculo.
- Puedo integrar más adelante reCAPTCHA o un honeypot para reducir spam.

Commit y subida
He subido y sobrescrito los archivos en la rama `main` con el mensaje de commit "Add portfolio files".
