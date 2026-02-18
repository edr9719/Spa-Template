'use client';

import { useEffect } from 'react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  icon: string;
  currentIndex: number;
  totalImages: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  onClose,
  title,
  category,
  icon,
  currentIndex,
  totalImages,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4'
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-white hover:text-primary transition-colors z-10'
        aria-label='Cerrar'
      >
        <span className='material-icons text-4xl'>close</span>
      </button>

      {/* Navigation Buttons */}
      {totalImages > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className='absolute left-4 text-white hover:text-primary transition-colors z-10'
            aria-label='Anterior'
          >
            <span className='material-icons text-5xl'>chevron_left</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className='absolute right-4 text-white hover:text-primary transition-colors z-10'
            aria-label='Siguiente'
          >
            <span className='material-icons text-5xl'>chevron_right</span>
          </button>
        </>
      )}

      {/* Image Container */}
      <div
        className='relative max-w-5xl w-full aspect-[4/3] bg-gradient-to-br from-primary/20 to-spa-dark/30 rounded-lg flex flex-col items-center justify-center'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <span className='material-icons text-white/40 text-9xl mb-6'>
          {icon}
        </span>

        {/* Title and Category */}
        <div className='text-center'>
          <h2 className='text-3xl md:text-4xl font-serif text-white mb-2'>
            {title}
          </h2>
          <p className='text-primary text-sm uppercase tracking-widest'>
            {category}
          </p>
        </div>

        {/* Counter */}
        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm'>
          {currentIndex + 1} / {totalImages}
        </div>
      </div>
    </div>
  );
}
