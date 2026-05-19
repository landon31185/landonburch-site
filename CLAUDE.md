# landonburch-site — Project Context for Claude

## Project Overview
- Personal blog + portfolio for Landon Burch, UX designer
- Site: landonburch.com (www redirects from apex)
- Topic: a UX designer navigating AI changes in tech
- Audience: potential employers, peers, general public
- Posting cadence: weekly blog posts
- Stack: Astro (static), deployed on Vercel, GitHub auto-deploy

## OOUX Object Model
The content architecture is based on these objects:

| Object | Status | Notes |
|--------|--------|-------|
| **Post** | Built | Blog entry. Frontmatter: `title`, `date`, `tags[]`, `description`, `showNotes[]` (optional: `{label, url}`) |
| **Experiment** | Built | Lab piece. Frontmatter: `title`, `date`, `description`, `tags[]`, `embedUrl?`, `embedType` (iframe\|component\|canvas), `relatedPost?` (slug) |
| **Tag** | Built | Spans Posts, Experiments, and Projects |
| **Series** | Planned | Ordered collection of Posts — not yet built |
| **Project** | Planned | Case study — not yet built |
| **Profile** | Planned | Single config: name, bio, availability_status — update in one place |

## Content Collections
- `src/content/blog/` — Post markdown files
- `src/content/experiments/` — Experiment markdown files
- Shared date utility: `src/utils/date.ts`
  - `formatDate(date, 'short')` → "Apr 2026"
  - `formatDate(date, 'long')` → "April 10, 2026"
  - Import from `../../utils/date` — do not inline a local copy

## Design System
- All design tokens live in `src/styles/global.css` as CSS custom properties
- Current palette: cream (`#F5F0E8`) / ink (`#1A1612`) / terracotta (`#C4622D`) — warm editorial aesthetic
- **Incoming:** A new design kit from Landon's work will replace the current tokens. When it arrives, retheme by updating CSS custom properties only — component structure stays the same
- Fonts: Playfair Display (headings) + DM Mono (body/labels)
  - Loaded via `<link rel="preconnect">` + `<link rel="stylesheet">` in BaseLayout `<head>`
  - Do NOT load via CSS `@import` — it's render-blocking

## Architecture Decisions
- **Vercel multi-zone routing:** Lab experiments can be separate Vercel deployments under their own repos, proxied under `landonburch.com/lab/*` via `vercel.json` rewrites. Each experiment can use any framework independently.
- **No backlinking yet:** `[[link]]`-style cross-references between posts are planned but not built. Tags are the current navigation layer.
- **Work and About pages:** Planned but not built. Do not add `href="#"` placeholders — omit nav items until pages exist.

## What's Not Built Yet
- `/work` — case studies (Project objects)
- `/about` — profile page
- Series navigation
- Per-post OG images (only `og-default.png` — not yet created)
- Backlink graph
- Password-protected projects

## Deployment
- GitHub repo: `landonburch-site`
- Vercel auto-deploys on push to `master`
- Tag before big changes: `git tag vX.X.X -m "..."` + `git push origin vX.X.X`
- `v0.1.0` = initial launch state (May 2026)

## Code Standards — Do Not Reintroduce
These were caught in the v0.1.0 review and fixed. Treat as standing rules:

- `requestAnimationFrame` loops must use `IntersectionObserver` to pause when off-screen
- Always handle `prefers-reduced-motion` for any JS-driven animation
- Google Fonts must use `<link>` with `preconnect` — never CSS `@import`
- `astro.config.mjs` must have `site: 'https://landonburch.com'`
- `BaseLayout.astro` must include OG, Twitter card, and `<link rel="canonical">` meta
- Text color must use explicit color values — no `opacity`-based fading (kills contrast)
- `BaseLayout.astro` must include a skip-to-content link and `id="main-content"` on `<main>`
- `<iframe>` embeds must have a `sandbox` attribute
- Shared utilities belong in `src/utils/` — never duplicate across page files
