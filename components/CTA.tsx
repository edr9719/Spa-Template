import { businessConfig } from '@/lib/business-config';
import { cta } from '@/lib/business-content';

function WhatsAppIcon() {
  return (
    <svg className='w-5 h-5 fill-current' viewBox='0 0 24 24'>
      <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.233-3.762c1.608.955 3.197 1.441 4.866 1.442 5.42 0 9.829-4.409 9.832-9.829 0-2.628-1.023-5.097-2.88-6.956-1.857-1.858-4.325-2.88-6.951-2.882-5.422 0-9.831 4.409-9.833 9.83 0 1.906.55 3.529 1.512 4.965l-.995 3.637 3.735-.979zm11.722-6.701c-.32-.16-1.891-.932-2.185-1.039-.294-.107-.507-.16-.721.16-.213.32-.827 1.039-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.577-1.59-.952-.848-1.594-1.897-1.781-2.217-.187-.32-.02-.492.14-.65.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.721-1.734-.987-2.374-.259-.624-.523-.54-.721-.55l-.614-.01c-.214 0-.56.08-.853.4-.294.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.095 1.307 3.308.16.213 2.257 3.447 5.467 4.834.763.329 1.359.526 1.824.673.766.243 1.463.209 2.014.127.614-.092 1.891-.773 2.158-1.481.267-.707.267-1.314.187-1.441-.08-.127-.294-.213-.614-.373z' />
    </svg>
  );
}

export default function CTA() {
  return (
    <section
      id='reservar'
      className='py-32 bg-background-light text-center px-6'
    >
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-serif mb-8'>{cta.heading}</h2>
        <p className='text-lg text-spa-dark/60 mb-12 font-light'>
          {cta.description}
        </p>
        <div className='flex flex-col items-center space-y-4'>
          <a
            href={businessConfig.whatsapp}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center space-x-3 bg-[#25D366] text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest font-bold hover:shadow-xl transition-all hover:-translate-y-1'
          >
            <WhatsAppIcon />
            <span>{cta.buttonText}</span>
          </a>
          <span className='text-xs uppercase tracking-widest text-spa-dark/40'>
            {cta.disclaimer}
          </span>
        </div>
      </div>
    </section>
  );
}
