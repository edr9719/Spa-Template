'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Lightbox from '@/components/Lightbox';
import { galleryImages } from '@/lib/business-content';
import { businessConfig } from '@/lib/business-config';

export default function GaleriaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setSelectedIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const selectedImage = galleryImages[selectedIndex];

  return (
    <main className='bg-background-light min-h-screen'>
      <Navbar />

      {/* Hero Section */}
      <section className='pt-32 pb-16 px-6 bg-gradient-to-b from-spa-dark to-background-light'>
        <div className='max-w-7xl mx-auto text-center'>
          {/* Breadcrumb */}
          <div className='flex items-center justify-center space-x-3 text-base text-spa-cream/80 mb-8'>
            <Link
              href='/'
              className='hover:text-primary transition-colors font-medium'
            >
              Inicio
            </Link>
            <span className='text-spa-cream/40'>/</span>
            <span className='text-primary font-medium'>Galería</span>
          </div>

          {/* Title */}
          <h1 className='text-4xl md:text-6xl font-serif text-white mb-4'>
            Nuestra Galería
          </h1>
          <p className='text-spa-cream/80 text-lg max-w-2xl mx-auto'>
            Explora nuestras instalaciones y descubre la experiencia que te
            espera en {businessConfig.name}
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className='group relative aspect-square bg-gradient-to-br from-primary/10 to-spa-dark/20 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105'
              >
                {/* Placeholder Content */}
                <div className='absolute inset-0 flex flex-col items-center justify-center p-6'>
                  <span className='material-icons text-primary/40 text-7xl mb-4 group-hover:text-primary/60 transition-colors'>
                    {image.icon}
                  </span>
                  <h3 className='text-spa-dark font-semibold text-center mb-2 group-hover:text-primary transition-colors'>
                    {image.title}
                  </h3>
                  <p className='text-xs text-spa-dark/60 uppercase tracking-wider'>
                    {image.category}
                  </p>
                </div>

                {/* Overlay on Hover */}
                <div className='absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center'>
                  <span className='material-icons text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity'>
                    zoom_in
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Note about images */}
          <div className='mt-16 text-center'>
            <div className='inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full'>
              <span className='material-icons text-primary text-xl'>info</span>
              <p className='text-sm text-spa-dark'>
                Las imágenes reales del spa se mostrarán próximamente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          title={selectedImage.title}
          category={selectedImage.category}
          icon={selectedImage.icon}
          currentIndex={selectedIndex}
          totalImages={galleryImages.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      <Footer />
    </main>
  );
}
