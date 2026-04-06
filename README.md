# mi-portfolio

Portfolio personal (sitio estático) hecho con **HTML/CSS/JavaScript** y publicado con **GitHub Pages**.

- **Demo:** `https://aguayoe.github.io/mi-portfolio/`
- **Contacto:** `elena.aguayo@cchs.csic.es`

## Qué encontrarás en la web
- **Sobre mí** (introducción + “chips” de habilidades y lenguajes).
- **Proyectos** (cards con demo/código).
- **Publicaciones científicas** (con enlace a ORCID).
- **Trayectoria profesional**.
- **Formación** (separado en *Estudios* y *Cursos*).
- **Competencias**.
- **Contacto** (formulario con fallback `mailto:`).

## Skills (tags)
**Data / Research**
- `Data Analysis`, `Statistical Analysis`, `Data Visualization`, `Reproducible Research`, `Scientific Communication`

**Tools**
- `Git`, `GitHub`, `Linux`, `Jupyter`

**Programming Languages**
- `Python`, `R`, `SQL`, `JavaScript`, `Bash`

## Perfiles
- GitHub: `https://github.com/aguayoe`
- LinkedIn: `https://www.linkedin.com/in/elenaguayo/`
- ORCID: `https://orcid.org/0009-0005-8143-0428`
- Google Scholar: `https://scholar.google.com/citations?user=sicaUKgAAAAJ&hl=es`

## Publicar en GitHub Pages
1. Ve a **Settings → Pages**
2. En **Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
3. Espera 1–5 minutos.

## Desarrollo local
Opción simple con VS Code:
1. Abre el repo en VS Code
2. Instala la extensión **Live Server**
3. Clic derecho en `index.html` → **Open with Live Server**

## Contacto (formulario)
El formulario usa un fallback `mailto:` y toma el email desde este atributo en `index.html`:

```html
<form id="contact-form" data-email="elena.aguayo@cchs.csic.es">
```

> Si prefieres envíos “reales” (sin abrir el cliente de correo), se puede integrar Formspree/Getform o un backend ligero.
