import { businessConfig } from '@/lib/business-config';

const whatsappLink = businessConfig.whatsapp;

function WhatsAppIcon() {
  return (
    <svg
      className='h-6 w-6 fill-current'
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <path d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.233-3.762c1.608.955 3.197 1.441 4.866 1.442 5.42 0 9.829-4.409 9.832-9.829 0-2.628-1.023-5.097-2.88-6.956-1.857-1.858-4.325-2.88-6.951-2.882-5.422 0-9.831 4.409-9.833 9.83 0 1.906.55 3.529 1.512 4.965l-.995 3.637 3.735-.979zm11.722-6.701c-.32-.16-1.891-.932-2.185-1.039-.294-.107-.507-.16-.721.16-.213.32-.827 1.039-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.352-.498-2.577-1.59-.952-.848-1.594-1.897-1.781-2.217-.187-.32-.02-.492.14-.65.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.721-1.734-.987-2.374-.259-.624-.523-.54-.721-.55l-.614-.01c-.214 0-.56.08-.853.4-.294.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.095 1.307 3.308.16.213 2.257 3.447 5.467 4.834.763.329 1.359.526 1.824.673.766.243 1.463.209 2.014.127.614-.092 1.891-.773 2.158-1.481.267-.707.267-1.314.187-1.441-.08-.127-.294-.213-.614-.373z' />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  return (
    // Persistent WhatsApp CTA reduces booking friction and can lift mobile conversions.
    <a
      href={whatsappLink}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Contactar por WhatsApp'
      className='floating-whatsapp fixed right-4 bottom-20 sm:right-6 sm:bottom-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] flex items-center justify-center'
    >
      <WhatsAppIcon />
      <span className='sr-only'>Abrir WhatsApp</span>
    </a>
  );
}
