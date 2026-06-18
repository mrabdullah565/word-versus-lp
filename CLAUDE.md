@AGENTS.md

# Word Versus — Marketing Landing Page

Marketing site and app-store public URL for **Word Versus**, a mobile app that teaches the subtle differences between similar-looking words (e.g. "alter" vs "modify", "start" vs "begin"). Built with Next.js 16 App Router.

> **Important:** The codebase currently contains placeholder "Tiny Harvest" branding. All copy, colors, logos, and metadata must be updated to Word Versus before launch.

## Tech Stack

| Tool | Detail |
|------|--------|
| Next.js 16.2.4 | App Router (`src/app/`), React Compiler enabled |
| React 19.2.4 | |
| TypeScript 5 | |
| Tailwind CSS v4 | CSS-first config — **no `tailwind.config.js`**; configured via `globals.css` |
| GSAP 3.15 | Scroll/entrance animations |
| lucide-react | Icon library |

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:3000
npm run build     # production build
npm start         # serve production build
npm run lint      # ESLint (Next.js core-web-vitals + TypeScript rules)
```

## Project Structure

```
src/app/
  layout.tsx              # root layout — mounts <Navbar />, sets metadata
  page.tsx                # home — composes all landing sections in order
  globals.css             # Tailwind v4 import, CSS custom props, .tiny-container
  components/
    navbar/Navbar.tsx     # fixed top nav, mobile hamburger menu ("use client")
    HeroSection.tsx       # hero with app store download CTAs ("use client")
    Reviews.tsx           # social proof / review cards
    DetailSection.tsx     # feature detail rows
    Action.tsx            # mid-page CTA block
    JourneySection.tsx    # how-it-works / user journey
    CommunitySection.tsx  # community / social links
    FooterSection.tsx     # footer with Privacy Policy and Terms links
  privacy/page.tsx        # /privacy — Privacy Policy page
public/images/            # static images: logo.png, screenshots, star.webp
```

## Conventions

- **Router:** App Router only. No `pages/` directory exists or should be created.
- **Language:** TypeScript throughout. No `.js` source files.
- **Styling:** Tailwind utility classes inline. Tailwind v4 is CSS-first — do not create `tailwind.config.js`. Add new design tokens in the `@theme inline` block in `globals.css`.
- **Container:** Use `.tiny-container` (`max-width: 1000px; margin-inline: auto; padding-inline: 12px`) for section widths — not `max-w-*` directly.
- **Components:** PascalCase filenames, default exports, one component per file. Add `"use client"` only when the component uses state, refs, or browser event handlers.
- **Images:** Always use `next/image` (`<Image>`), never bare `<img>`. Static assets go in `public/images/`.
- **Metadata:** Set `title`, `description`, and Open Graph fields in the `export const metadata` in `layout.tsx`.

## Guardrails

- **Performance:** This is a marketing page — keep bundles small. Avoid adding large client-side libraries without a clear reason.
- **SEO:** Ensure `metadata` in `layout.tsx` is filled in with real Word Versus copy before any public launch.
- **Mobile-first:** All sections must be responsive. The existing sections use `sm:`, `md:`, `lg:` breakpoints — follow this pattern.
- **Accessibility:** Use semantic elements (`<section>`, `<nav>`, `<footer>`, proper heading hierarchy `h1` → `h2`). All `<Image>` components need descriptive `alt` text.
- **Match existing patterns:** New landing sections should follow the component shape already used (named file in `src/app/components/`, Tailwind only, `.tiny-container` wrapper, default export).

## TODOs (awaiting owner input)

- `TODO: App Store link` — `href` on App Store button in HeroSection
- `TODO: Google Play link` — `href` on Google Play button in HeroSection
- `TODO: Support email` — footer Support link and Privacy Policy contact address
- `TODO: Discord link` — Discord icon `href` in Navbar and FooterSection
- `TODO: TikTok link` — TikTok icon `href` in Navbar and FooterSection
- `TODO: Brand assets` — Word Versus logo (`public/images/logo.png`), favicon, og:image
- `TODO: Brand colors` — update CSS custom properties in `globals.css` to Word Versus palette
- `TODO: Update metadata` — `title` and `description` in `layout.tsx` (currently "Tiny Harvest")
- `TODO: Replace all placeholder copy` — hero text, section copy, reviews, footer copyright
