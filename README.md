# SVN Enterprises — Industrial Website

A modern, production-ready website for **SVN Enterprises** — a manufacturer of industrial and textile machinery based in Erode, Tamil Nadu (established 2012).

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **React Icons**, **Moment.js**, and **Framer Motion**.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ (recommended: 20+)
- npm / pnpm / yarn

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
npm run build
npm run start
```

### Lint
```bash
npm run lint
```

---

## 🧱 Tech Stack

| Layer            | Technology                              |
| ---------------- | --------------------------------------- |
| Framework        | Next.js 15 (App Router)                 |
| Language         | TypeScript                              |
| Styling          | Tailwind CSS (custom industrial theme)  |
| Icons            | react-icons                             |
| Animations       | framer-motion                           |
| Date formatting  | moment.js                               |
| Fonts            | Inter + Playfair Display (next/font)    |

---

## 📂 Folder Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── faq/
│   ├── gallery/
│   ├── products/
│   │   └── [slug]/       # Dynamic product detail
│   ├── testimonials/
│   ├── layout.tsx
│   ├── page.tsx          # Home
│   ├── not-found.tsx
│   └── loading.tsx
├── components/           # Reusable UI components
├── data/                 # Static data (products, FAQs, testimonials, gallery, site config)
├── lib/
├── styles/               # globals.css + utility classes
├── types/                # Shared TypeScript types
└── utils/

public/
├── images/
└── products/
```

---

## 📄 Pages

- **Home** (`/`) — Hero, Why Choose Us, Featured Products, Stats, Process, Testimonials, FAQ preview, Latest Updates (Moment.js)
- **About** (`/about`) — Company overview, mission/vision, animated timeline, CEO message, team, trust stats
- **Products** (`/products`) — Filterable, searchable product grid
- **Product Detail** (`/products/[slug]`) — Gallery, specs table, benefits, related products, FAQ, CTA
- **Gallery** (`/gallery`) — Masonry layout with category filter + lightbox
- **Testimonials** (`/testimonials`) — Auto-advancing carousel + grid
- **FAQ** (`/faq`) — Accordion with 8 common questions
- **Contact** (`/contact`) — Tiles, contact form (pre-fills `?product=` slug), business info, map embed

---

## 🎨 Design System

- **Color palette**: white + dark blue (`brand`) + steel gray + amber accent
- **Typography**: Playfair Display (display) + Inter (sans)
- **Custom utilities** in `src/styles/globals.css`:
  - `btn-primary`, `btn-accent`, `btn-outline`, `btn-ghost`
  - `container-x`, `section-padding`
  - `heading-accent`, `blueprint-bg`, `stripe-bg`
- Soft shadows + industrial shadow variants
- Subtle blueprint grid and diagonal stripe backgrounds for industrial feel

---

## 🧩 Components

`Navbar`, `Footer`, `HeroSection`, `PageHero`, `Breadcrumbs`, `ProductCard`,
`FAQAccordion`, `TestimonialSlider`, `ContactForm`, `SectionTitle`,
`StatsCounter`, `ProcessTimeline`, `GalleryGrid`, `CTASection`,
`ScrollToTop`, `FloatingActions`.

---

## 📦 Data

All static content lives under `src/data/`:
- `products.ts` — 9 products with full details (features, applications, specs, benefits, FAQs, gallery)
- `testimonials.ts` — 6 industrial client testimonials
- `faqs.ts` — 8 FAQs
- `gallery.ts` — 12 gallery items across 5 categories
- `site.ts` — Site config, stats, why-choose-us, process steps, timeline, latest updates

Replace dummy values (phone, email, address, social links) in `src/data/site.ts` with real ones before going live.

---

## 🔍 SEO

- Metadata defined per route via Next.js `metadata` export
- Open Graph + Twitter tags in `layout.tsx`
- `metadataBase` set to `https://www.svnenterprises.in` — update if your domain differs

---

## 📝 License

© 2026 SVN Enterprises. All Rights Reserved.
