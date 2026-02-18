import { Metadata } from 'next';
import { businessConfig } from '@/lib/business-config';

const { seo } = businessConfig;

export const metadata: Metadata = {
  title: `Galería - ${businessConfig.name} | Nuestras Instalaciones`,
  description: `Explora nuestras instalaciones y descubre la experiencia que te espera en ${businessConfig.name} en ${businessConfig.city}. Ambiente exclusivo y servicios premium.`,
  openGraph: {
    title: `Galería - ${businessConfig.name}`,
    description: `Explora nuestras instalaciones y servicios premium en ${businessConfig.city}`,
    url: `${seo.siteUrl}/galeria`,
    siteName: businessConfig.name,
    locale: seo.locale,
    type: 'website',
  },
};

export default function GaleriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
