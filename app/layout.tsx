import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { businessConfig } from '@/lib/business-config';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

// ─── Schema.org JSON-LD ───────────────────────────────────────────────────────
// Generated entirely from businessConfig so it stays accurate across clients.
// Type annotations are kept local to this file — they describe the schema shape
// and are not needed outside the layout.

type PostalAddress = {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
};

type GeoCoordinates = {
  '@type': 'GeoCoordinates';
  latitude: number;
  longitude: number;
};

type OpeningHoursSpecification = {
  '@type': 'OpeningHoursSpecification';
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

type BeautySalonSchema = {
  '@context': 'https://schema.org';
  '@type': 'BeautySalon';
  name: string;
  image: string;
  '@id': string;
  url: string;
  telephone: string;
  address: PostalAddress;
  geo: GeoCoordinates;
  openingHoursSpecification: OpeningHoursSpecification[];
  sameAs: string[];
};

const { seo, social } = businessConfig;

const localBusinessSchema: BeautySalonSchema = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: businessConfig.name,
  image: seo.ogImage,
  '@id': `${seo.siteUrl}/#business`,
  url: seo.siteUrl,
  telephone: businessConfig.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessConfig.address,
    addressLocality: businessConfig.city,
    addressRegion: businessConfig.state,
    postalCode: businessConfig.postalCode,
    addressCountry: businessConfig.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: businessConfig.coordinates.lat,
    longitude: businessConfig.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '16:00',
      closes: '21:00',
    },
  ],
  // Only include social accounts that have been configured
  sameAs: [social.instagram, social.facebook, social.tiktok].filter(Boolean),
};

// ─── Metadata ─────────────────────────────────────────────────────────────────
// Generated from businessConfig.seo so updating the config is all that's needed.

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: businessConfig.name,
    locale: seo.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' className={`${manrope.variable} ${playfair.variable}`}>
      <body className='font-display antialiased'>
        {children}
        <FloatingWhatsApp />
        {/* JSON-LD helps search engines understand this site as a local beauty business. */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </body>
    </html>
  );
}
