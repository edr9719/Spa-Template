import Image from 'next/image';
import { membership } from '@/lib/business-content';

export default function Membership() {
  return (
    <section id='promociones' className='py-20 px-6'>
      <div className='max-w-7xl mx-auto bg-spa-dark rounded-2xl overflow-hidden relative flex flex-col md:flex-row items-center'>
        {/* Left Content */}
        <div className='w-full md:w-1/2 p-12 lg:p-20 z-10 text-white'>
          <h2 className='text-3xl md:text-4xl font-serif mb-6'>
            Membresía{' '}
            <span className='text-primary italic'>
              {membership.programName}
            </span>
          </h2>
          <p className='text-white/70 mb-8 leading-relaxed font-light'>
            {membership.description}
          </p>
          <a
            href='#reservar'
            className='inline-block border border-primary text-primary px-8 py-3 rounded text-xs uppercase tracking-widest font-bold hover:bg-primary hover:text-white transition-all'
          >
            {membership.ctaText}
          </a>
        </div>

        {/* Right Image */}
        <div className='w-full md:w-1/2 h-80 md:h-[500px] relative'>
          <Image
            src={membership.image}
            alt={membership.imageAlt}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
          />
        </div>
      </div>
    </section>
  );
}
