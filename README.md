# Ronith Komatireddy — Portfolio

Cinematic personal portfolio. Next.js 15 (App Router) · React 19 · TypeScript ·
Tailwind CSS v4 · GSAP + ScrollTrigger · Lenis · Framer Motion.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Edit your content

Everything editable lives in **`lib/data.ts`** — contact details, project
descriptions/links, experience, skills, education. The contact rows and the
two project descriptions are currently placeholders (marked with TODO).

## Project images

Drop your real project images at:

- `public/images/paracosm.png` (or `.jpg`)
- `public/images/local-lens.png` (or `.jpg`)

…then set the `image` field for each project in `lib/data.ts`, e.g.
`image: "/images/paracosm.png"`. Until then, the hover preview shows a
typographic placeholder card.

## Structure

- `components/StorySequence.tsx` — the pinned hero→journey scroll story
  (video collapse, name→RK, years, image assembly). Fully scrubbed/reversible.
- `components/Experience.tsx` — growing timeline.
- `components/Skills.tsx` — editorial table with hover inversion.
- `components/Projects.tsx` — rows with cursor-following preview card.
- `components/Contact.tsx` — shrinking red-dot outro.
- `components/SmoothScroll.tsx` — Lenis wired into GSAP's ticker.

## Performance notes

- All scroll animation is transform/opacity/clip-path only (GPU-friendly).
- `prefers-reduced-motion` disables pins and shows the settled layout.
- Consider compressing `public/videos/hero_portfolio.mp4` further
  (e.g. ~6–8 MB at 1080p CRF 26) before deploying.
