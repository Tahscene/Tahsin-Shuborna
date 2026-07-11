## Changes

### 1. Publications — Read Paper buttons
In `src/components/portfolio/Publications.tsx`, add a `pdf` field to each entry (`/leafvrnet-paper.pdf`, `/envirobirth-paper.pdf`, `/vaxsight-paper.pdf`). Render a small "Read Paper" button (accent-outlined pill with `FileText` icon from lucide) under each citation, opening the PDF in a new tab (`target="_blank"`, `rel="noopener noreferrer"`). Place next to the DOI link when present.

### 2. Contact — fix CV links
In `src/components/portfolio/Contact.tsx`, change:
- Faculty CV `href` → `/Tahsin_Shuborna_Lecturer_CSE.pdf`
- Data Analyst CV `href` → `/Tahsin_Shuborna_Data_Analyst.pdf`

Keep the `download` attribute. Files go in `public/` (user uploads later).

### 3. Contact — ORCID + Google Scholar
In the same file, extend the contact links grid from 3 to 5 items (switch to `sm:grid-cols-2 lg:grid-cols-5` so it stays tidy on mobile). Add:
- ORCID link → `ORCID_URL_HERE`, using lucide `Fingerprint` icon (closest match, small)
- Google Scholar link → `SCHOLAR_URL_HERE`, using lucide `GraduationCap` icon

Same card styling as existing email/LinkedIn/GitHub cards.

### 4. About — circular photo placeholder
In `src/components/portfolio/About.tsx`, add a ~220px circular `div` above (mobile) / left of (desktop) the existing stat card. Uses a gray placeholder background (`bg-chalk-dim`) with a 4px maroon-accent ring (`ring-4 ring-[color:var(--maroon)] ring-offset-4 ring-offset-paper`). Use `https://placehold.co/440x440/B9C4BD/0E1A15?text=Photo` as the `<img>` src so replacement is a one-line swap. Wrap the existing right-column content so photo + stat card stack cleanly.

### 5. Timeline — role icons
In `src/components/portfolio/Timeline.tsx`, add an optional `icon` field per item:
- Elite Research Lab LLC → lucide `GraduationCap`
- FlyRank AI → lucide `Cpu`
- Deloitte Australia (Forage) → lucide `BadgeCheck` (Deloitte's actual logomark isn't in lucide; using a clean badge icon as a stand-in — noted so it can be swapped for a real Deloitte SVG later)

Render inside a small circular chip (~28px, `bg-paper border border-accent`) aligned with the timeline dot, positioned to the right of the dot next to the role title.

### 6. Hero — analyst scene set
- In `src/components/portfolio/HeroScenes.tsx`, add four new SVG scenes in the same chalk line-art style: `SceneCountingBlocks`, `SceneBarChartPaper`, `SceneTeenLaptop`, `SceneAnalystBoard`.
- In `src/components/portfolio/Hero.tsx`, read `useMode()`. Define both scene arrays (teacher = current 4; analyst = new 4 with captions: "Chapter one. The first numbers in small hands.", "Chapter two. Turning numbers into patterns.", "Chapter three. The first spreadsheet, the first chart.", "Chapter four. The career I chose: data and analysis."). Pick the active array from `mode`. Scroll math stays identical; only the rendered set swaps. The line color is `text-chalk` and inherits `currentColor`, so the analyst blue accent applies automatically through the existing `--accent` CSS variable — apply `text-accent` to the analyst scenes' SVG root so the drawn lines pick up the analyst blue while teacher scenes stay chalk-white.

## Files
- Modify: `src/components/portfolio/Publications.tsx`, `Contact.tsx`, `About.tsx`, `Timeline.tsx`, `Hero.tsx`, `HeroScenes.tsx`

No color-palette or font changes. No new dependencies (all icons from existing `lucide-react`).
