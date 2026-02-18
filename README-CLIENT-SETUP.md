# Client Setup Guide

A new client deployment takes **15–20 minutes**. This guide covers everything from cloning to going live.

---

## Prerequisites

- Node.js 18+ (`node -v` to check)
- npm or pnpm
- Git

---

## 5-Step Duplication Workflow

### 1. Duplicate the Repository

```bash
# Clone for a new client
git clone <this-repo-url> client-name-spa
cd client-name-spa

# Start fresh git history (optional but recommended)
rm -rf .git
git init
git add .
git commit -m "init: client template"
```

---

### 2. Set Business Identity & Contact

Open **`/lib/business-config.ts`** — this is the single file you must fill in:

```ts
export const businessConfig: BusinessConfig = {
  name: 'Client Spa Name',
  tagline: 'Their Tagline',
  logoPath: '/images/logo.svg', // or '' to use text fallback

  phone: '+52 33 XXXX XXXX',
  whatsapp: 'https://wa.me/52XXXXXXXXXX',
  email: 'hola@clientspa.com',
  address: 'Street Address 123',
  city: 'Ciudad',
  state: 'Estado',
  postalCode: '00000',
  country: 'MX',
  coordinates: { lat: 0.0000, lng: 0.0000 },
  hours: 'Lun - Sáb: 10:00 AM - 8:00 PM',
  mapEmbed: 'https://maps.google.com/maps?q=...&output=embed',

  social: {
    instagram: 'https://instagram.com/handle', // '' to hide
    facebook: 'https://facebook.com/handle',   // '' to hide
    tiktok: '',                                 // '' to hide
  },

  seo: {
    title: 'Client Spa | Tag in City',
    description: '160-char meta description...',
    keywords: ['spa ciudad', 'masajes', ...],
    siteUrl: 'https://clientspa.com',
    ogImage: 'https://clientspa.com/images/hero-spa.png',
    locale: 'es_MX',
  },

  features: {
    showGallery: true,      // false hides /galeria and its nav link
    showMembership: true,   // false hides the Membership section
    pricingTier: 'premium', // informational flag for conditional UI
  },
};
```

> **Tip:** The `mapEmbed` URL can be obtained from Google Maps → Share → Embed a map → copy the `src` value from the iframe code.

---

### 3. Customize Services and Content

Open **`/lib/business-content.ts`** and update:

| Export                 | What to change                                                  |
| ---------------------- | --------------------------------------------------------------- |
| `hero`                 | Headline, tagline, description, CTA text, image path            |
| `navigation`           | Add/remove/rename nav links                                     |
| `services`             | Replace with client's actual service offerings                  |
| `features`             | Update the 4 feature highlights                                 |
| `testimonials`         | Replace with real client reviews                                |
| `googleReviewsSummary` | Update rating and total count                                   |
| `galleryImages`        | Update titles/categories (replace icons with real photos later) |
| `membership`           | Update program name, description, CTA                           |
| `cta`                  | Update booking section copy                                     |

---

### 4. Replace Image Assets

Place client images in `/public/images/` with these names (or update paths in `business-content.ts`):

| File                   | Used in                       |
| ---------------------- | ----------------------------- |
| `hero-spa.png`         | Hero section background       |
| `membership-noir.png`  | Membership section            |
| `gelish.png`           | Services carousel             |
| `service-manicura.png` | Services carousel             |
| `service-faciales.png` | Services carousel             |
| `service-masajes.png`  | Services carousel             |
| `depilacion.png`       | Services carousel             |
| `logo.svg`             | Navbar (if `logoPath` is set) |

**OG Image:** Set `seo.ogImage` in `business-config.ts` to an absolute URL of a 1200×630 image.

**Gallery photos:** Drop real photos into `/public/images/gallery/` and update `galleryImages` in `business-content.ts` to use `image` paths instead of placeholder icons.

---

### 5. Adjust Brand Colors

Open **`tailwind.config.ts`** and update the color block:

```ts
colors: {
  primary: '#bf973b',            // ← Main brand accent (buttons, highlights)
  'background-light': '#f8f7f6', // ← Page background
  'background-dark': '#1e1b14',  // ← Dark section backgrounds
  'spa-dark': '#0F0F0F',         // ← Text and deep backgrounds
  'spa-cream': '#F5F5F2',        // ← Text on dark backgrounds
},
```

After saving, run `npm run dev` or `npm run build` — Tailwind rebuilds automatically.

---

## Optional: Set the Domain

Update `seo.siteUrl` in `business-config.ts` to the live domain before building for production. This value is used in:

- Canonical URLs in metadata
- OpenGraph `url` tags
- JSON-LD schema `url` and `@id` fields

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Production Build

```bash
npm run build
npm start
```

For static export (e.g. Vercel, Netlify, GitHub Pages), ensure `next.config.mjs` has `output: 'export'` if needed. The project is static-export compatible by default.

---

## Deployment Checklist

- [ ] `business-config.ts` — all fields filled in
- [ ] `business-content.ts` — services and content updated
- [ ] Images replaced in `/public/images/`
- [ ] Brand colors updated in `tailwind.config.ts`
- [ ] `seo.siteUrl` set to live domain
- [ ] Social links verified (or set to `''` to hide)
- [ ] `npm run build` passes without errors
- [ ] Test on mobile viewport
- [ ] Verify WhatsApp button links to correct number
- [ ] Check Google Rich Results with JSON-LD validator

---

## Feature Flags Reference

| Flag                      | Effect                                                             |
| ------------------------- | ------------------------------------------------------------------ |
| `showGallery: false`      | Removes `/galeria` link from nav and disables the gallery section  |
| `showMembership: false`   | Hides the Membership promotional section on the home page          |
| `pricingTier: 'standard'` | Available for use in conditional pricing UI (not wired by default) |

---

## Architecture Overview

```
/lib
  business-config.ts   ← Identity, contact, SEO, feature flags
  business-content.ts  ← Services, testimonials, copy, navigation

/components            ← All consume config/content — no hardcoded values
/app/layout.tsx        ← Metadata + JSON-LD schema (from businessConfig)
/tailwind.config.ts    ← Brand colors (rebuild to apply)
```

Two files to edit, one build, one deploy. That's the full workflow.
