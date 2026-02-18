/**
 * BUSINESS CONTENT — Services, testimonials, features, and copy.
 *
 * This file controls WHAT the business offers and WHAT appears on the page.
 * It is intentionally separate from business-config.ts so that:
 *   - Identity/contact changes → edit business-config.ts only
 *   - Content/copy changes     → edit this file only
 *
 * Each array or object below can be freely modified, expanded, or trimmed
 * per client without affecting layout or configuration logic.
 */

// ─── Types ──────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  /** Hash anchor (e.g. "#servicios") or page route (e.g. "/galeria") */
  href: string;
  /** true = anchor scroll link, false = Next.js <Link> route */
  anchor: boolean;
}

export interface HeroContent {
  tagline: string;
  headline: string;
  description: string;
  /** Path relative to /public */
  image: string;
  imageAlt: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
}

export interface Service {
  title: string;
  description: string;
  /** Path relative to /public */
  image: string;
  alt: string;
  /** Material Icons name */
  icon: string;
}

export interface Feature {
  /** Material Icons name */
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  rating: number;
  avatar?: string;
  date: string;
  source: string;
}

export interface GoogleReviewsSummary {
  averageRating: number;
  totalReviews: number;
  googleMapsUrl: string;
}

export interface GalleryImage {
  title: string;
  category: string;
  /** Material Icons name shown as placeholder before real photos are added */
  icon: string;
}

export interface MembershipContent {
  /** E.g. "Noir" — rendered with italic primary color */
  programName: string;
  description: string;
  ctaText: string;
  /** Path relative to /public */
  image: string;
  imageAlt: string;
}

export interface CtaContent {
  heading: string;
  description: string;
  buttonText: string;
  disclaimer: string;
}

// ─── Navigation ─────────────────────────────────────────────────────────────
// The gallery link is conditionally rendered by Navbar based on
// businessConfig.features.showGallery — you don't need to remove it here.

export const navigation: NavLink[] = [
  { label: 'Servicios', href: '#servicios', anchor: true },
  { label: 'Experiencia', href: '#experiencia', anchor: true },
  { label: 'Galería', href: '/galeria', anchor: false },
  { label: 'Ubicación', href: '#ubicacion', anchor: true },
  { label: 'Promociones', href: '#promociones', anchor: true },
];

// ─── Hero ────────────────────────────────────────────────────────────────────

export const hero: HeroContent = {
  tagline: 'Santuario de Serenidad',
  headline: 'Experiencia de lujo para tu bienestar',
  description:
    'Descubre un refugio de sofisticación en el corazón de Huentitan. Donde cada detalle está diseñado para elevar tus sentidos.',
  image: '/images/hero-spa.png',
  imageAlt: 'Luxurious spa environment with soft warm lighting',
  cta: {
    primary: { text: 'Reservar ahora', href: '#reservar' },
    secondary: { text: 'Explorar Menú', href: '#servicios' },
  },
};

// ─── Services ────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    title: 'Uñas Gelish',
    description:
      'Aplicación profesional de gel semipermanente con acabado impecable, brillo duradero y cuidado de la uña natural.',
    image: '/images/gelish.png',
    alt: 'Servicio profesional de uñas gelish con acabado elegante',
    icon: 'spa',
  },
  {
    title: 'Manicura & Pedicura',
    description:
      'Cuidado meticuloso para manos y pies, incluyendo exfoliación orgánica y masajes hidratantes profundos.',
    image: '/images/service-manicura.png',
    alt: 'Luxury manicure station with gold accents and soft lighting',
    icon: 'content_cut',
  },
  {
    title: 'Faciales Premium',
    description:
      'Tratamientos rejuvenecedores utilizando activos de alta gama para una luminosidad instantánea y profunda.',
    image: '/images/service-faciales.png',
    alt: 'High-end facial treatment being applied to skin',
    icon: 'face',
  },
  {
    title: 'Masajes Holísticos',
    description:
      'Terapias corporales que integran técnicas ancestrales para restaurar el equilibrio entre cuerpo y mente.',
    image: '/images/service-masajes.png',
    alt: 'Holistic massage therapy with smooth stones and essential oils',
    icon: 'self_improvement',
  },
  {
    title: 'Depilación',
    description:
      'Depilación suave y precisa para distintas zonas, con técnicas que priorizan la comodidad y el cuidado de tu piel.',
    image: '/images/depilacion.png',
    alt: 'Servicio de depilación estética en ambiente de spa',
    icon: 'face_retouching_natural',
  },
];

// ─── Features ────────────────────────────────────────────────────────────────

export const features: Feature[] = [
  {
    icon: 'workspace_premium',
    title: 'Ambiente exclusivo',
    description:
      'Instalaciones diseñadas para la privacidad y el máximo confort sensorial.',
  },
  {
    icon: 'sanitizer',
    title: 'Productos premium',
    description:
      'Utilizamos marcas líderes internacionales con ingredientes de origen natural.',
  },
  {
    icon: 'verified_user',
    title: 'Especialistas',
    description:
      'Equipo altamente calificado con certificaciones internacionales en bienestar.',
  },
  {
    icon: 'auto_awesome',
    title: 'Atención 1:1',
    description:
      'Cada tratamiento se personaliza según las necesidades únicas de tu cuerpo.',
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const googleReviewsSummary: GoogleReviewsSummary = {
  averageRating: 4.8,
  totalReviews: 45,
  googleMapsUrl: 'https://www.google.com/maps/place/Blanco+%26+Negro+Spa',
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'La atención al detalle en Blanco & Negro es simplemente inigualable. Es mi refugio favorito en Guadalajara para desconectarme del mundo y reconectar conmigo misma. El ambiente es súper relajante y los masajes son de otro nivel.',
    author: 'Mariana Velasco',
    rating: 5,
    date: 'hace 2 meses',
    source: 'Google',
  },
  {
    quote:
      'Excelente servicio, las instalaciones están impecables y el personal es muy profesional. Me encantó el masaje con piedras calientes. Sin duda regresaré.',
    author: 'Carlos Jiménez',
    rating: 5,
    date: 'hace 1 mes',
    source: 'Google',
  },
  {
    quote:
      'Muy buen spa, precios justos y buena atención. El facial que me hicieron dejó mi piel increíble. Lo recomiendo ampliamente.',
    author: 'Sofía Ramírez',
    rating: 4,
    date: 'hace 3 semanas',
    source: 'Google',
  },
  {
    quote:
      'Ambiente tranquilo y acogedor. Las terapeutas son expertas y se nota la calidad de los productos que utilizan. Una experiencia muy completa.',
    author: 'Andrea González',
    rating: 5,
    date: 'hace 1 semana',
    source: 'Google',
  },
];

// ─── Gallery ─────────────────────────────────────────────────────────────────
// Replace icon placeholders with real images once photography is available.
// Each item maps 1-to-1 with an image file in /public/images/gallery/.

export const galleryImages: GalleryImage[] = [
  {
    title: 'Masaje con Piedras Calientes',
    category: 'Masajes',
    icon: 'self_improvement',
  },
  { title: 'Sala de Masajes', category: 'Instalaciones', icon: 'spa' },
  { title: 'Tratamiento Facial Premium', category: 'Faciales', icon: 'face' },
  {
    title: 'Estación de Manicura',
    category: 'Manicura & Pedicura',
    icon: 'content_cut',
  },
  { title: 'Área de Relajación', category: 'Instalaciones', icon: 'weekend' },
  { title: 'Aplicación de Gelish', category: 'Uñas', icon: 'palette' },
  { title: 'Masaje Holístico', category: 'Masajes', icon: 'self_improvement' },
  { title: 'Sala de Tratamiento', category: 'Instalaciones', icon: 'hotel' },
  {
    title: 'Pedicura de Lujo',
    category: 'Manicura & Pedicura',
    icon: 'opacity',
  },
  { title: 'Productos Premium', category: 'Instalaciones', icon: 'sanitizer' },
  {
    title: 'Zona de Depilación',
    category: 'Depilación',
    icon: 'face_retouching_natural',
  },
  { title: 'Recepción', category: 'Instalaciones', icon: 'home' },
];

// ─── Membership ──────────────────────────────────────────────────────────────
// Only rendered when businessConfig.features.showMembership is true.

export const membership: MembershipContent = {
  programName: 'Noir',
  description:
    'Únete a nuestro círculo exclusivo y disfruta de beneficios preferenciales, invitaciones a eventos privados y descuentos en todos los rituales mensuales.',
  ctaText: 'Saber más',
  image: '/images/membership-noir.png',
  imageAlt:
    'Modern minimalist spa reception with elegant black and white marble',
};

// ─── CTA ─────────────────────────────────────────────────────────────────────

export const cta: CtaContent = {
  heading: 'Agenda tu momento de bienestar',
  description:
    'Estamos listos para brindarte la experiencia de relajación que mereces. Atendemos bajo cita previa para garantizar tu privacidad.',
  buttonText: 'Reservar por WhatsApp',
  disclaimer: 'Respuesta inmediata en horario laboral',
};
