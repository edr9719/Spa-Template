# Spa Website Template

A production-ready Next.js 14 spa website template — clone it, configure two files, and deploy for any client in under 20 minutes.

> **Deploying for a new client?** See [README-CLIENT-SETUP.md](README-CLIENT-SETUP.md) for the complete duplication guide.

---

## Architecture

This project uses a two-file configuration system so client-specific data never bleeds into component logic:

| File                      | Purpose                                                                    |
| ------------------------- | -------------------------------------------------------------------------- |
| `lib/business-config.ts`  | Business identity, contact info, social links, SEO metadata, feature flags |
| `lib/business-content.ts` | Services, testimonials, features, navigation, copy, and images             |

All components import from these two files — there are no hardcoded business names, phone numbers, or locations anywhere in the component tree.

**Brand colors** are defined in `tailwind.config.ts` and require a rebuild to apply (no runtime CSS variables — by design, for simplicity and static export compatibility).

---

## Feature Flags

Controlled in `businessConfig.features`:

- `showGallery` — toggles the `/galeria` route and nav link
- `showMembership` — toggles the Membership section on the home page
- `pricingTier` — informational flag for conditional pricing UI

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
