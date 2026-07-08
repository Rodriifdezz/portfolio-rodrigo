# Portfolio — Rodrigo Fernández

Portfolio personal construido con Astro, Tailwind CSS y animaciones con GSAP + Lenis.

**Producción:** [rodrigofernandez.dev](https://rodrigofernandez.dev)

## Stack

- **Framework:** Astro 6
- **Estilos:** Tailwind CSS 4
- **Animaciones:** GSAP, ScrollTrigger, Lenis
- **Iconos:** simple-icons
- **Node:** >= 22.12.0

## Estructura

```text
/
├── public/              # Assets estáticos (imágenes, vídeos, CV)
│   ├── cv/              # PDF del CV (canónico: Rodrigo-Fernandez-CV.pdf)
│   ├── fomo/            # Media del case study FOMO
│   └── innovatech/      # Media del case study Innovatech
├── cv-ats/              # Generador del CV ATS (HTML → PDF)
├── src/
│   ├── assets/          # Imágenes optimizadas con astro:assets
│   ├── components/      # Secciones y UI (Hero, Projects, etc.)
│   ├── data/site.ts     # Copy, proyectos y datos globales
│   ├── layouts/         # BaseLayout y CaseStudyLayout
│   └── pages/           # Rutas del sitio
└── astro.config.mjs
```

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal |
| `/projects/fomo` | Case study FOMO |
| `/projects/innovatech` | Case study Innovatech |
| `/projects/erp` | Case study ERP (TFC de DAM) |
| `/404` | Página no encontrada (noindex) |

## Comandos

```sh
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de producción en ./dist/
npm run preview      # Previsualizar el build
npm run cv:generate  # Regenerar CV PDF en public/cv/
```

## Despliegue

El sitio está preparado para **Netlify** (`netlify.toml`) o **Vercel** (`vercel.json`).

### Netlify (recomendado)

1. Conecta el repo en [netlify.com](https://netlify.com).
2. Build command: `npm run build` · Publish directory: `dist`
3. Configura el dominio `rodrigofernandez.dev` en **Domain settings**.
4. El `site` en `astro.config.mjs` usa `URL` de Netlify en preview/producción.

### Vercel

1. Importa el repo en [vercel.com](https://vercel.com).
2. Vercel detecta Astro automáticamente.
3. Configura el dominio propio en **Settings → Domains**.

En ambos casos, el dominio canónico por defecto es `https://rodrigofernandez.dev`.

## SEO y producción

- Open Graph + Twitter cards (con dimensiones de imagen)
- JSON-LD: `Person`, `WebSite` (home) y `CreativeWork` (case studies)
- Sitemap automático: `/sitemap-index.xml`
- `robots.txt` con referencia al sitemap
- URLs sin trailing slash (`trailingSlash: 'never'`)
- Página 404 con `noindex`
- Web manifest + favicon propio
- Headers de seguridad y caché (`netlify.toml` / `vercel.json`)
- Skip link, focus visible, `prefers-reduced-motion`
- CV único en `public/cv/Rodrigo-Fernandez-CV.pdf`

## CV ATS

```sh
npm run cv:generate        # PDF por defecto
npm run cv:preview         # HTML de preview en cv-ats/output/
```

Los datos del CV viven en `cv-ats/cv-data.ts`. Tras regenerar, commitea el PDF en `public/cv/`.

## Privacidad y datos públicos

- La web **no expone el email personal** en HTML ni en JSON-LD (menos spam de bots).
- El contacto público es **LinkedIn**; el CV descargable incluye email y datos de contacto completos.

## Configuración global

Copy y proyectos del sitio: `src/data/site.ts`. Datos de contacto del CV: `cv-ats/cv-data.ts`.

## Convenciones de assets

- Archivos en `public/` con nombres en **kebab-case** (sin espacios).
- Fotos del portfolio en `src/assets/` usando `astro:assets`.
- Media de case studies agrupada por carpeta de proyecto.
- No commitear `dist/`, `node_modules/` ni `cv-ats/output/`.
