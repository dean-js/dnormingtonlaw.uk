# D Normington Law — Portfolio Website

This repository contains a custom Jekyll portfolio and blog site. The design is a dark, minimalist theme with a neon-accent palette focused on readability and project presentation.

## Quick Local Development

- Install dependencies:
  ```bash
  npm install
  ```
- Compile Sass / build CSS (uses the project's Gulp setup):
  ```bash
  npx gulp sass
  ```
- Serve the site with Jekyll:
  ```bash
  bundle exec jekyll serve
  ```

Open http://localhost:4000 (default) to preview.

## Current State (summary)

- Global typography and color system unified to use a single font stack and neon `$accent` for primary headings.
- Homepage hero text updated to recruiter-focused copy and now inherits site typography and sizing.
- Learning path (About page) cards restyled to match portfolio/pillar cards (dark background, neon borders, rounded corners, drop shadow) and left-aligned text.
- `.learning-path` now uses an adaptive CSS Grid (`repeat(auto-fit, minmax(280px, 1fr))`) and the last card spans full width via `.learning-item:last-child { grid-column: 1 / -1; }`.
- Cards changed from fixed heights to flexible sizing (`height: auto; min-height: 100%`) so content and buttons no longer clip.
- Mobile improvements: large avatar hidden below the menu on small screens, hero and cards scale and left-align for touch devices.
- New project page scaffold added: `/projects/home-lab-project/index.md` and homepage/project listing updated with the Home Lab card.
- SCSS recompiled and generated `assets/css/main.css` updated and committed.

Notes: Sass compilation currently emits deprecation warnings relating to `@import` and `darken()` usage (Dart Sass recommendations). These are non-blocking but should be addressed later by migrating to the `@use` API and `color.adjust`.

## Files / Locations of interest

- Styles (source): `assets/css/scss/` — key file: `parts/_home-page.scss` and `main.scss`.
- Generated CSS: `assets/css/main.css` (committed)
- Layouts: `_layouts/main.html`, `_layouts/project.html`
- Includes: `_includes/` (nav, head, footer fragments)
- Content pages: `index.html`, `about.md`, `projects.md`, `_posts/` and `projects/*`

## Next recommended steps

- Migrate Sass to `@use` and replace deprecated color functions (low effort, improves future compatibility).
- Wrap card action buttons in a `.card-actions` container where you want button area pinned to card bottom (helper class added in SCSS).
- Optionally run a quick visual smoke-test (local browser or screenshot) to confirm spacing on different viewport sizes.

## License

GNU General Public License v3.0
