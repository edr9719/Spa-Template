import type { Config } from 'tailwindcss';

/**
 * BRAND COLORS — Edit this section for each client.
 *
 * This is the only place where brand colors live. There are no runtime CSS
 * variables; clients simply update these values and rebuild the project.
 *
 * Color roles:
 *   primary           — Main accent color (buttons, highlights, icons).
 *                       Replace with the client's brand color.
 *   background-light  — Page background and card surfaces.
 *   background-dark   — Dark section backgrounds (e.g. hero overlays).
 *   spa-dark          — Near-black used for text and deep backgrounds.
 *   spa-cream         — Warm off-white for text on dark backgrounds.
 *
 * After changing colors, run `npm run build` (or `npm run dev`) to apply them.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── CLIENT CUSTOMIZATION: update these per client ──────────────────
        primary: '#bf973b', // Gold/bronze — main brand accent
        'background-light': '#f8f7f6', // Off-white page background
        'background-dark': '#1e1b14', // Dark warm-brown sections
        'spa-dark': '#0F0F0F', // Near-black text & deep backgrounds
        'spa-cream': '#F5F5F2', // Cream — text on dark backgrounds
        // ───────────────────────────────────────────────────────────────────
      },
      fontFamily: {
        display: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
