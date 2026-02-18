'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { businessConfig } from '@/lib/business-config';
import { navigation } from '@/lib/business-content';

// Filter gallery link when feature flag is off
const navLinks = navigation.filter(
  (link) => link.href !== '/galeria' || businessConfig.features.showGallery,
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isGalleryPage = pathname === '/galeria';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background-light/95 backdrop-blur-md border-b border-primary/10 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        {/* Logo — uses logoPath image if set, otherwise falls back to styled text */}
        <Link href='/' className='flex items-center space-x-2'>
          {businessConfig.logoPath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={businessConfig.logoPath}
              alt={businessConfig.name}
              className='h-10 w-auto'
            />
          ) : (
            <>
              <span className='text-2xl font-serif font-bold tracking-tighter'>
                B<span className='text-primary'>&</span>N
              </span>
              <span
                className={`text-sm uppercase tracking-[0.3em] font-light hidden sm:block transition-colors ${
                  scrolled ? 'text-spa-dark' : 'text-white'
                }`}
              >
                {businessConfig.name}
              </span>
            </>
          )}
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center space-x-10 text-xs uppercase tracking-widest font-medium'>
          {navLinks.map((link) => {
            const href =
              link.anchor && isGalleryPage ? `/${link.href}` : link.href;
            const isActive = !link.anchor && pathname === link.href;

            return link.anchor ? (
              <a
                key={link.href}
                href={href}
                className={`hover:text-primary transition-colors ${
                  scrolled ? 'text-spa-dark' : 'text-white'
                } ${isActive ? 'text-primary' : ''}`}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors ${
                  scrolled ? 'text-spa-dark' : 'text-white'
                } ${isActive ? 'text-primary' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <a
          href='#reservar'
          className='hidden md:inline-block bg-primary text-white px-6 py-2.5 rounded text-xs uppercase tracking-widest font-semibold hover:bg-primary/90 transition-all shadow-sm'
        >
          Reservar Cita
        </a>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col space-y-1.5 p-2'
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label='Toggle menu'
        >
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? 'bg-spa-dark' : 'bg-white'
            } ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? 'bg-spa-dark' : 'bg-white'
            } ${mobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all ${
              scrolled ? 'bg-spa-dark' : 'bg-white'
            } ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className='md:hidden bg-background-light/95 backdrop-blur-md border-t border-primary/10 px-6 py-8 space-y-6'>
          {navLinks.map((link) => {
            const href =
              link.anchor && isGalleryPage ? `/${link.href}` : link.href;
            const isActive = !link.anchor && pathname === link.href;

            return link.anchor ? (
              <a
                key={link.href}
                href={href}
                className={`block text-sm uppercase tracking-widest font-medium text-spa-dark hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm uppercase tracking-widest font-medium text-spa-dark hover:text-primary transition-colors ${
                  isActive ? 'text-primary' : ''
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href='#reservar'
            className='block bg-primary text-white px-6 py-3 rounded text-xs uppercase tracking-widest font-semibold text-center hover:bg-primary/90 transition-all'
            onClick={() => setMobileOpen(false)}
          >
            Reservar Cita
          </a>
        </div>
      )}
    </header>
  );
}
