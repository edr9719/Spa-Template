/**
 * BUSINESS CONFIGURATION — Single source of truth for client identity.
 *
 * This file controls WHO the business is, HOW to reach them, SEO metadata,
 * and which optional sections to show on the site.
 *
 * When duplicating this template for a new client:
 *   1. Fill in every field below with the client's real information.
 *   2. Set feature flags (showGallery, showMembership, pricingTier) as needed.
 *   3. Update brand colors in tailwind.config.ts.
 *   4. Deploy — no other files need to change for basic identity customization.
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface SocialLinks {
  /** Full URL, e.g. "https://instagram.com/handle" — leave empty string to hide */
  instagram: string;
  facebook: string;
  tiktok: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface SeoConfig {
  /** Browser tab title */
  title: string;
  /** Meta description shown in Google results */
  description: string;
  keywords: string[];
  /** Canonical site URL — no trailing slash */
  siteUrl: string;
  /** Absolute URL to the OG share image (1200×630 recommended) */
  ogImage: string;
  /** BCP-47 locale for OpenGraph, e.g. "es_MX" */
  locale: string;
}

export interface FeatureFlags {
  /** Show/hide the /galeria route and its Navbar link */
  showGallery: boolean;
  /** Show/hide the Membership promotional section on the home page */
  showMembership: boolean;
  /** Informational flag — useful for conditional pricing display */
  pricingTier: 'standard' | 'premium';
}

export interface BusinessConfig {
  // ── Identity ──────────────────────────────────────────────────────────────
  /** Public-facing business name, used in headings, copyright, and schema */
  name: string;
  /** Short tagline shown above the hero headline */
  tagline: string;
  /**
   * Path to logo image relative to /public, e.g. "/images/logo.svg".
   * If empty, the Navbar will fall back to a styled text abbreviation.
   */
  logoPath: string;

  // ── Contact ───────────────────────────────────────────────────────────────
  /** Display-formatted phone number, e.g. "+52 33 3171 6049" */
  phone: string;
  /** Full WhatsApp URL, e.g. "https://wa.me/523331716049" */
  whatsapp: string;
  email: string;
  /** Street address */
  address: string;
  city: string;
  state: string;
  postalCode: string;
  /** ISO 3166-1 alpha-2 country code, e.g. "MX" */
  country: string;
  coordinates: Coordinates;
  /** Human-readable opening hours shown in footer and schema */
  hours: string;
  /** Google Maps embed src URL for the footer iframe */
  mapEmbed: string;

  // ── Social ────────────────────────────────────────────────────────────────
  social: SocialLinks;

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: SeoConfig;

  // ── Feature Flags ─────────────────────────────────────────────────────────
  features: FeatureFlags;
}

// ─── Config ─────────────────────────────────────────────────────────────────

export const businessConfig: BusinessConfig = {
  // ── Identity ──────────────────────────────────────────────────────────────
  name: 'Blanco & Negro Spa',
  tagline: 'Santuario de Serenidad',
  // No logo image file yet — Navbar falls back to styled "B&N" text.
  logoPath: '',

  // ── Contact ───────────────────────────────────────────────────────────────
  phone: '+52 33 3171 6049',
  whatsapp: 'https://wa.me/523331716049',
  email: 'hola@blancoynegrospa.com',
  address: 'Calzada Independencia Norte 4281',
  city: 'Guadalajara',
  state: 'Jalisco',
  postalCode: '44340',
  country: 'MX',
  coordinates: {
    lat: 20.7061,
    lng: -103.308,
  },
  hours: 'Lun - Sáb: 10:00 AM - 2:00 PM y 4:00 PM - 9:00 PM',
  mapEmbed:
    'https://maps.google.com/maps?q=Calzada%20Independencia%20Norte%204281,%20Guadalajara&t=&z=15&ie=UTF8&iwloc=&output=embed',

  // ── Social ────────────────────────────────────────────────────────────────
  // Leave as empty string ("") to hide that icon in the footer.
  social: {
    instagram: 'https://instagram.com/blancoynegrospa',
    facebook: 'https://facebook.com/blancoynegrospa',
    tiktok: '',
  },

  // ── SEO ───────────────────────────────────────────────────────────────────
  seo: {
    title: 'Blanco & Negro Spa | Experiencia de Lujo en Guadalajara',
    description:
      'Descubre un refugio de sofisticación en el corazón de Guadalajara. Masajes holísticos, faciales premium y manicura SPA. Reserva tu cita hoy.',
    keywords: [
      'spa guadalajara',
      'masajes holísticos',
      'faciales premium',
      'spa de lujo',
      'bienestar',
      'blanco y negro spa',
    ],
    siteUrl: 'https://blancoynegrospa.com',
    ogImage: 'https://blancoynegrospa.com/images/hero-spa.png',
    locale: 'es_MX',
  },

  // ── Feature Flags ─────────────────────────────────────────────────────────
  features: {
    showGallery: true,
    showMembership: true,
    pricingTier: 'premium',
  },
};
