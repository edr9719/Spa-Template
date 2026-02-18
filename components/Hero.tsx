import Image from 'next/image';
import { hero } from '@/lib/business-content';

export default function Hero() {
  return (
    <section className='relative h-screen w-full flex items-center justify-center overflow-hidden'>
      {/* Overlay */}
      <div className='absolute inset-0 bg-spa-dark/40 z-10' />

      {/*
        next/image + fill + priority improves LCP and reserves layout space
        via the fixed h-screen container, which helps prevent CLS.
      */}
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        fill
        className='object-cover'
        priority
        sizes='100vw'
      />

      {/* Content */}
      <div className='relative z-20 text-center px-4 max-w-4xl'>
        <span className='text-primary uppercase tracking-[0.5em] text-sm mb-6 block font-medium'>
          {hero.tagline}
        </span>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight'>
          {hero.headline}
        </h1>
        <p className='text-white/80 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed'>
          {hero.description}
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
          {/* Strong visual CTA above the fold helps improve booking conversion rate. */}
          <a
            href={hero.cta.primary.href}
            className='bg-primary text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform w-full sm:w-auto text-center'
          >
            {hero.cta.primary.text}
          </a>
          <a
            href={hero.cta.secondary.href}
            className='border border-white/50 text-white px-10 py-4 rounded-lg text-sm uppercase tracking-widest font-bold hover:bg-white hover:text-spa-dark transition-all w-full sm:w-auto text-center'
          >
            {hero.cta.secondary.text}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce'>
        <svg
          className='w-6 h-6 text-white/50'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
          />
        </svg>
      </div>
    </section>
  );
}
