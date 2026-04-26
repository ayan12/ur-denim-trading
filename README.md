# UR DENIM TRADING INDO — Premium Denim Website

A production-ready, dark-luxury corporate / product-showcase website for
**UR Denim Trading Indo**, an Indonesian denim manufacturer & exporter.
Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## Highlights

- **Dark luxury theme** — navy/black palette, bold display type, thin gold rivet accents
- **Fullscreen hero** with animated entrance and scroll hint
- **Products gallery** with category filter, hover-zoom cards, and animated modal details
- **About** with image collage, 4 animated stats counters, and company pillars
- **Contact** with validated form (name / email / company / message), WhatsApp CTA, and success state
- **FAQ** accordion with smooth spring transitions
- **Sticky, scroll-aware navbar** with active-section tracking and mobile sheet
- **First-paint loader**, skip-to-content link, keyboard-accessible modal & menu
- **SEO optimized** — Open Graph, Twitter cards, sitemap, robots, themeColor
- **Fully responsive** (mobile-first) and accessible (WCAG-friendly colours, focus rings, reduced-motion support)

---

## Tech stack

| Layer          | Choice                         |
| -------------- | ------------------------------ |
| Framework      | Next.js 14 (App Router)        |
| Language       | TypeScript                     |
| Styling        | Tailwind CSS + custom tokens   |
| Animation      | Framer Motion                  |
| Icons          | lucide-react                   |
| Type utilities | clsx + tailwind-merge          |
| Hosting        | Vercel (zero-config)           |

---

## Folder structure

```
ur-denim-trading-indo/
├── app/
│   ├── globals.css          # Theme tokens, base styles, utilities
│   ├── layout.tsx           # Root layout (fonts, SEO, Navbar/Footer)
│   ├── page.tsx             # Home page (assembles all sections)
│   ├── loading.tsx          # Route-level loading state
│   ├── not-found.tsx        # 404 page
│   ├── sitemap.ts           # Auto-generated sitemap.xml
│   └── robots.ts            # Auto-generated robots.txt
├── components/
│   ├── Navbar.tsx           # Sticky navbar + mobile sheet + active-section tracking
│   ├── Footer.tsx           # Footer with brand, links, socials
│   ├── Loader.tsx           # First-paint loader
│   ├── Logo.tsx             # Brand mark
│   ├── Divider.tsx          # Hairline section divider
│   ├── ScrollReveal.tsx     # Reusable in-view fade/lift
│   ├── SectionHeading.tsx   # Eyebrow + title + description
│   ├── StatsCounter.tsx     # Animated number counter
│   ├── Hero.tsx             # Fullscreen hero
│   ├── Products.tsx         # Products grid + filters
│   ├── ProductCard.tsx      # Card with hover zoom
│   ├── ProductModal.tsx     # Details modal (ESC + scroll-lock)
│   ├── About.tsx            # About collage + stats + pillars
│   ├── Contact.tsx          # Validated contact form
│   └── FAQ.tsx              # Accordion
├── lib/
│   ├── brand.ts             # Centralised brand constants (name, email, WhatsApp)
│   ├── nav.ts               # Nav links
│   ├── products.ts          # Product catalog + categories
│   ├── faqs.ts              # FAQ content
│   └── utils.ts             # cn() class merger + easing tokens
├── types/
│   └── index.ts             # Shared types (Product, FaqItem, NavLink)
├── public/                  # (Place favicon, og-image, real product photos here)
├── package.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## Getting started

### 1 · Prerequisites

- **Node.js 18.17+** (or 20+ recommended)
- **npm**, **pnpm** or **yarn**

### 2 · Install

```bash
cd ur-denim-trading-indo
npm install
# or: pnpm install
# or: yarn
```

### 3 · Run the dev server

```bash
npm run dev
```

Open <http://localhost:3000> to view the site. Edits to files hot-reload instantly.

### 4 · Production build

```bash
npm run build
npm run start
```

### 5 · Scripts

| Command              | What it does                        |
| -------------------- | ----------------------------------- |
| `npm run dev`        | Dev server with hot reload          |
| `npm run build`      | Optimised production build          |
| `npm run start`      | Serve the production build          |
| `npm run lint`       | Run ESLint (Next.js core-web-vitals) |
| `npm run type-check` | Run `tsc --noEmit`                   |

---

## Customising the site

Everything content-related is in **`lib/`** so a marketer or developer can update copy without touching components.

- **Brand name, email, WhatsApp, socials** → `lib/brand.ts`
- **Navigation links** → `lib/nav.ts`
- **Products** (title, category, image, specs, highlights) → `lib/products.ts`
- **FAQs** → `lib/faqs.ts`
- **Colours, typography, spacing** → `tailwind.config.ts` + `app/globals.css`

### Replace placeholder images

The product and collage images currently use hosted Unsplash URLs so the site runs immediately out of the box.
To use real photography:

1. Add your photos to `public/images/` (e.g. `public/images/selvage-14oz.jpg`).
2. Update each `image` field in `lib/products.ts` to `/images/your-file.jpg`.
3. Remove the unused `remotePatterns` entries in `next.config.js` if desired.

### Wire up the contact form

`components/Contact.tsx` simulates a submission so the UX is functional on day one.
To collect real inquiries, replace the fake `await` inside `onSubmit` with a call to your backend — for example:

- An **API route** (`app/api/contact/route.ts`) that calls **Resend**, **Postmark**, **SendGrid**, or **Nodemailer**.
- A form service like **Formspree**, **Web3Forms**, or **Getform**.
- A **Vercel Serverless Function** writing to a **Google Sheet** or **Notion** database.

### Update WhatsApp number

Open `lib/brand.ts` and update `whatsapp`. The helper `whatsappLink(message)` builds the deep link automatically everywhere in the site.

### SEO & Open Graph

- Edit titles / descriptions in `app/layout.tsx` (`export const metadata`).
- Replace `/og-image.jpg` in `public/` with a 1200×630 social card.
- Update `SITE_URL` in `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`.

---

## Deploying to Vercel

The fastest path for production hosting:

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to <https://vercel.com/new>, select the repo, and click **Deploy**.
3. Vercel auto-detects Next.js — no config required.
4. Add your custom domain under **Project → Settings → Domains**.

### One-click (CLI)

```bash
npm i -g vercel
vercel
# follow prompts; subsequent deploys:
vercel --prod
```

### Other hosts

The site is a standard Next.js app — it also runs on **Netlify**, **Cloudflare Pages**, **Render**, or any Node host.

---

## Accessibility & performance

- Semantic landmarks (`<header> <main> <footer>`) and skip-to-content link.
- Labels, `aria-*`, `role="dialog"`, focus rings on every interactive element.
- `prefers-reduced-motion` respected across all animations and counters.
- Font subsets + `display: swap` for zero FOIT.
- `optimizePackageImports` for `framer-motion` and `lucide-react`.
- `next/image` for responsive, lazy-loaded images.

---

## License

© UR Denim Trading Indo. All rights reserved. Source code provided for the client under their engagement agreement.
