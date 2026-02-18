import { businessConfig } from '@/lib/business-config';

function LocationIcon() {
  return (
    <svg
      className='w-5 h-5 text-primary flex-shrink-0'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
      />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z'
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className='w-5 h-5 text-primary flex-shrink-0'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3'
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className='w-5 h-5 text-primary flex-shrink-0'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className='w-5 h-5 text-primary flex-shrink-0'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className='w-4 h-4 fill-current' viewBox='0 0 24 24'>
      <path d='M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' />
    </svg>
  );
}

export default function Footer() {
  const phoneHref = `tel:${businessConfig.phone.replace(/\s+/g, '')}`;
  const { social } = businessConfig;

  return (
    <footer id='ubicacion' className='bg-spa-dark text-white pt-24 pb-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20'>
          {/* Contact Info */}
          <div>
            <h2 className='text-3xl font-serif mb-8 tracking-wide'>
              Visítanos
            </h2>
            <div className='space-y-6 text-white/70 font-light'>
              <div className='flex items-start space-x-4'>
                <LocationIcon />
                <p>
                  {businessConfig.address},
                  <br />
                  {businessConfig.city}, {businessConfig.state}, CP{' '}
                  {businessConfig.postalCode}
                </p>
              </div>
              <div className='flex items-center space-x-4'>
                <PhoneIcon />
                <a
                  href={phoneHref}
                  className='hover:text-primary transition-colors'
                >
                  {businessConfig.phone}
                </a>
              </div>
              <div className='flex items-center space-x-4'>
                <MailIcon />
                <p>{businessConfig.email}</p>
              </div>
              <div className='flex items-center space-x-4'>
                <ClockIcon />
                <p>{businessConfig.hours}</p>
              </div>
            </div>

            {/* Social Icons — links with empty string are hidden */}
            <div className='flex space-x-6 mt-12'>
              {social.facebook && (
                <a
                  href={social.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Facebook'
                  className='w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors'
                >
                  <FacebookIcon />
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Instagram'
                  className='w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors'
                >
                  <InstagramIcon />
                </a>
              )}
              {social.tiktok && (
                <a
                  href={social.tiktok}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='TikTok'
                  className='w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors'
                >
                  <TikTokIcon />
                </a>
              )}
            </div>
          </div>

          {/* Map */}
          <div className='rounded-xl overflow-hidden grayscale-map h-[350px] border border-white/10'>
            <iframe
              src={businessConfig.mapEmbed}
              width='100%'
              height='100%'
              frameBorder='0'
              scrolling='no'
              title={`Ubicación de ${businessConfig.name}`}
              loading='lazy'
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-[0.2em] text-white/40 font-medium'>
          <p>
            &copy; {new Date().getFullYear()} {businessConfig.name}. Todos los
            derechos reservados.
          </p>
          <div className='flex space-x-8 mt-6 md:mt-0'>
            <a href='#' className='hover:text-primary transition-colors'>
              Aviso de Privacidad
            </a>
            <a href='#' className='hover:text-primary transition-colors'>
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
