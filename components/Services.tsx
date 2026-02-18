'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { services } from '@/lib/business-content';

function ServiceCard({
  title,
  description,
  image,
  alt,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className='group snap-start shrink-0 w-[85%] sm:w-[48%] lg:w-[32%] rounded-xl p-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10'>
      {/* Image */}
      <div className='aspect-[4/5] overflow-hidden rounded-xl mb-6 relative'>
        <Image
          src={image}
          alt={alt}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-700'
          sizes='(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw'
        />
        {!isOpen && (
          <button
            type='button'
            onClick={() => setIsOpen(true)}
            aria-expanded={false}
            className='absolute inset-0 z-[1]'
          >
            <span className='sr-only'>{`Ver detalles de ${title}`}</span>
          </button>
        )}
        {isOpen && (
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            aria-label={`Ocultar detalles de ${title}`}
            className='absolute inset-0 z-[3] p-6 flex items-end bg-black/55 text-left transition-opacity duration-300'
          >
            <p className='text-white/95 font-light leading-relaxed text-sm sm:text-base'>
              {description}
            </p>
          </button>
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-spa-dark/60 to-transparent transition-opacity flex items-end p-8 ${
            isOpen ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <span className='text-white text-xs uppercase tracking-widest border-b border-white pb-1 pointer-events-none'>
            Ver detalles
          </span>
        </div>
      </div>

      {/* Info */}
      <div className='flex items-center justify-between mb-3 transition-transform duration-300 group-hover:-translate-y-1'>
        <h4 className='text-xl font-serif tracking-wide uppercase'>{title}</h4>
        <ArrowIcon isOpen={isOpen} />
      </div>
      <div className='h-px bg-primary/20 w-full' />
    </article>
  );
}

function ArrowIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-primary/60 transition-transform ${
        isOpen ? 'rotate-45' : ''
      }`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
      />
    </svg>
  );
}

export default function Services() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'prev' | 'next') => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;

    const scrollAmount = card.offsetWidth + 24;
    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section id='servicios' className='py-24 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-20'>
          <h2 className='text-primary font-serif italic text-2xl mb-2'>
            Nuestros Rituales
          </h2>
          <div className='w-12 h-px bg-primary mx-auto mb-6' />
          <h3 className='text-3xl md:text-4xl font-serif tracking-tight uppercase'>
            Servicios Exclusivos
          </h3>
        </div>

        <div className='relative'>
          <button
            type='button'
            onClick={() => scrollCarousel('prev')}
            aria-label='Ver servicios anteriores'
            className='absolute left-0 top-[40%] -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-primary/30 text-primary bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={1.8}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 19.5L8.25 12l7.5-7.5'
              />
            </svg>
          </button>
          <button
            type='button'
            onClick={() => scrollCarousel('next')}
            aria-label='Ver más servicios'
            className='absolute right-0 top-[40%] -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-primary/30 text-primary bg-white/90 backdrop-blur-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center'
          >
            <svg
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={1.8}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M8.25 4.5l7.5 7.5-7.5 7.5'
              />
            </svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className='flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth pb-2 px-14 md:px-16'
          >
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
