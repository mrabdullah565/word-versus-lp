# Word Versus — Marketing Site

Marketing landing page and app-store public URL for **Word Versus**, a mobile vocabulary app that teaches the subtle differences between similar-looking words — e.g. "alter" vs "modify", "start" vs "begin".

This repo serves two purposes:
1. Marketing the Word Versus app to new users.
2. Providing the publicly accessible URL required by the Apple App Store and Google Play during app submission.

---

## Tech Stack

- **Framework:** Next.js 16.2.4 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first, no config file)
- **Animations:** GSAP 3.15
- **Icons:** lucide-react
- **Runtime:** React 19 with React Compiler

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/app/
  layout.tsx              # Root layout — global fonts, Navbar, metadata
  page.tsx                # Home page — assembles all landing sections
  globals.css             # Tailwind v4 import, CSS variables, .tiny-container
  components/
    navbar/Navbar.tsx     # Responsive top navigation
    HeroV4.tsx             # Hero with app store download buttons
    ProblemSection.tsx     # Problem / before-and-after framing
    HowItWorksSection.tsx  # How the app works
    FoundersNote.tsx       # Founder's note
    Action.tsx              # "See it in action" screenshot grid
    FinalCTA.tsx            # Closing call-to-action block
    FooterSection.tsx       # Footer with legal + support links
  privacy/page.tsx        # /privacy — Privacy Policy (required by app stores)
  terms/page.tsx          # /terms — Terms of Use
  support/page.tsx        # /support — Support & FAQ
public/images/            # Logo, app screenshots, decorative assets
```

---

## Deployment

The site is designed to deploy on **Vercel** (the default for Next.js App Router projects). Connect the repo to a Vercel project and deployments happen automatically on push to `main`.

No environment variables are required for the static marketing site.

---

## Placeholders

The following items need to be filled in before the site goes live:

| Item | Location |
|------|----------|
| App Store link | `src/app/components/HeroV4.tsx` and `FooterSection.tsx` — App Store button `href` |
| Google Play link | `src/app/components/HeroV4.tsx` and `FooterSection.tsx` — Google Play button `href` |
| Discord link | `src/app/components/navbar/Navbar.tsx` and `FooterSection.tsx` |
| TikTok link | `src/app/components/navbar/Navbar.tsx` and `FooterSection.tsx` |
| Brand colors | `src/app/globals.css` — `--background` and `@theme inline` block |

---

## Contact

Support: abdullahrafique@gmail.com
