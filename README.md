# Portfolio para GitHub Pages (HTML/CSS/JS)

Portfolio estático listo para publicar en **GitHub Pages**.

## Demo
- URL: `https://aguayoe.github.io/mi-portfolio/`

## Qué incluye
- Secciones: Proyectos, Cursos, Sobre mí, Contacto.
- **Menú móvil** tipo hamburguesa (accesible).
- **Tema claro/oscuro** (guarda preferencia en `localStorage` y respeta `prefers-color-scheme`).
- Formulario de contacto con **fallback vía `mailto:`** (abre el cliente de correo del usuario).
- Mejoras básicas de SEO (Open Graph/Twitter card) y accesibilidad.

## Publicar en GitHub Pages
1. Ve a **Settings → Pages**.
2. En **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Espera 1–5 minutos y abre la URL del apartado Demo.

## Desarrollo local (opción simple)
- Abre la carpeta en VS Code
- Instala la extensión **Live Server**
- Clic derecho en `index.html` → **Open with Live Server**

## Contacto (formulario)
El formulario usa un fallback `mailto:` y toma el email desde este atributo en `index.html`:

```html
<form id="contact-form" data-email="TU_EMAIL_AQUI">
```

## Personalización rápida
- Sustituye los placeholders en “Proyectos destacados” (demo y repositorio).
- Revisa enlaces a redes sociales.
- (Opcional) cambia el `og:image` por una imagen propia tipo `og-image.png`.
