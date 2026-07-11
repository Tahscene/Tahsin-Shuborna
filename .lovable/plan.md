# Tahsin Shuborna Portfolio

Single-page site with a chalkboard aesthetic, a Teacher/Analyst toggle that swaps accent color and select copy, and a scroll-driven hero.

## Design tokens (src/styles.css)
Replace default shadcn tokens with the exact palette. Add semantic tokens:
- `--paper` #F4EDE1 (background), `--board` #1F3B33, `--board-dark` #152B24
- `--chalk` #F4EDE1, `--chalk-dim` #B9C4BD, `--ink` #0E1A15
- `--teacher` #E7B84E, `--analyst` #5FA3B0, `--maroon` #9C3B46
- `--accent` dynamic (defaults to teacher, swapped via a `.mode-analyst` class on `<html>`)
- Fonts via `<link>` in `__root.tsx` head: Fraunces, Baloo Da 2, Inter. Register `--font-display`, `--font-accent`, `--font-sans` in `@theme`.
- Update `__root.tsx` head with real title/description/OG for "Tahsin Shuborna — Educator & Data Analyst".

## Components (src/components/portfolio/)
- `ModeContext.tsx` — React context: `mode: 'teacher' | 'analyst'`, toggles `document.documentElement.classList` and updates `--accent`.
- `NavBar.tsx` — fixed top, paper bg with subtle border. Name left (Fraunces). Links: About, Path, Research, Publications, Skills, Contact (smooth scroll to section IDs). Right: pill toggle Teacher/Analyst. Mobile: hamburger opening a paper sheet menu.
- `Hero.tsx` — full-viewport chalkboard-green section that is `sticky` inside a tall (400vh) wrapper. Heading "One Story, One Marker" (no em dash — comma is fine per rules; will use plain "One Story One Marker" per spec). Subtitle "Scroll to watch the journey unfold." Four inline SVG chalk line-art scenes stacked absolutely; opacity crossfades driven by scroll progress (`useScroll` from framer-motion or plain scroll listener). Captions under each.
  - Scene 1: toddler with toy whiteboard — "Where it started"
  - Scene 2: child teaching two friends — "Playing teacher"
  - Scene 3: young woman in saree teaching a small group — "Finding her voice"
  - Scene 4: educator at a large whiteboard with a diagram — "Teaching with intent"
- `About.tsx` — two-column. Left: paragraph copy that swaps by mode. Right: stat card on board-dark with chalk text listing the six stats.
- `Timeline.tsx` — vertical line with maroon→board gradient, dots at each entry. Six entries in the specified order with role, org, date, description.
- `Research.tsx` — 6-card grid (responsive 1/2/3 cols) with title, tags, one-line description.
- `Publications.tsx` — ordered list, academic citation style, three entries incl. ICCIT 2025 DOI link.
- `Skills.tsx` — 4 category cards, chip tags. Analyst mode fades Teaching to `opacity-60` and rings Data Analytics with `--analyst`; Teacher mode does the reverse with Teaching / `--teacher`.
- `Certifications.tsx` — small cards grid for certs/achievements (Deloitte Forage, Dean's List, Hackathon top 10, etc.).
- `Contact.tsx` — board-green section, heading, invite line, two CV download buttons (placeholder `/cv-faculty.pdf`, `/cv-analyst.pdf`), email / LinkedIn / GitHub links.
- `Footer.tsx` — thin footer with name and year.

## Route
- `src/routes/index.tsx` — replaces placeholder. Wraps everything in `ModeProvider`, renders sections in order with `id` anchors matching nav links. Head sets page-specific title, description, og:title/description, twitter card.

## Copy notes
- Write every paragraph following the user's rules: no em dashes, no comma before "and", no stand-in hyphens for dashes. Use periods or restructure.
- Teacher-mode About copy emphasizes pedagogy, mentorship, undergraduate teaching goals.
- Analyst-mode About copy emphasizes data pipelines, statistical modeling, business insight.

## Interactions
- Toggle updates a CSS var `--accent` on `:root` so every `text-accent`, `bg-accent`, `border-accent` recolors instantly with a 300ms transition.
- Skills highlight uses `data-mode` on section root plus Tailwind arbitrary variants.
- Nav links use `#section-id` and `scroll-behavior: smooth` set globally on `html`.

## Responsiveness
- Grid: `grid-cols-[minmax(0,1fr)_auto]` header pattern, `md:` breakpoints for two-column About, 2/3-col Research, 2/4-col Skills.
- Hamburger uses shadcn `Sheet`.
- Hero scenes scale down; captions stack under on mobile.

## Files to create
```
src/components/portfolio/ModeContext.tsx
src/components/portfolio/NavBar.tsx
src/components/portfolio/Hero.tsx
src/components/portfolio/HeroScenes.tsx  (four SVGs)
src/components/portfolio/About.tsx
src/components/portfolio/Timeline.tsx
src/components/portfolio/Research.tsx
src/components/portfolio/Publications.tsx
src/components/portfolio/Skills.tsx
src/components/portfolio/Certifications.tsx
src/components/portfolio/Contact.tsx
src/components/portfolio/Footer.tsx
```

## Files to modify
- `src/styles.css` — replace token block with palette, register fonts, add `.mode-teacher` / `.mode-analyst` accent swap, add chalk texture utility.
- `src/routes/__root.tsx` — add Google Fonts `<link>` entries, update meta title/description/OG.
- `src/routes/index.tsx` — assemble the page.

## Out of scope
- No backend, no auth, no forms submitting anywhere. CV buttons link to static `/public` placeholder PDFs (empty files unless you supply the real PDFs later).
