import { testimonials, googleReviewsSummary } from '@/lib/business-content';

function GoogleLogo() {
  return (
    <svg className='h-6 w-auto' viewBox='0 0 272 92' fill='none'>
      <path
        d='M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'
        fill='#EA4335'
      />
      <path
        d='M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z'
        fill='#FBBC05'
      />
      <path
        d='M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z'
        fill='#4285F4'
      />
      <path d='M225 3v65h-9.5V3h9.5z' fill='#34A853' />
      <path
        d='M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z'
        fill='#EA4335'
      />
      <path
        d='M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z'
        fill='#4285F4'
      />
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className='flex space-x-0.5'>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'text-[#FBBC05] fill-[#FBBC05]'
              : 'text-gray-300 fill-gray-300'
          }`}
          viewBox='0 0 20 20'
        >
          <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent color based on name
  const colors = [
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-red-500',
  ];
  const colorIndex = name.charCodeAt(0) % colors.length;

  return (
    <div
      className={`w-10 h-10 rounded-full ${colors[colorIndex]} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className='py-32 px-6 bg-white'>
      <div className='max-w-6xl mx-auto'>
        {/* Header with Google branding */}
        <div className='text-center mb-16 animate-fade-in-up'>
          <div className='flex items-center justify-center mb-4'>
            <GoogleLogo />
          </div>
          <div className='flex items-center justify-center space-x-2 mb-3'>
            <span className='text-5xl font-bold text-spa-dark'>
              {googleReviewsSummary.averageRating.toFixed(1)}
            </span>
            <div className='flex flex-col items-start'>
              <StarRating
                rating={Math.round(googleReviewsSummary.averageRating)}
              />
              <span className='text-sm text-gray-600 mt-1'>
                {googleReviewsSummary.totalReviews} reseñas
              </span>
            </div>
          </div>
          <a
            href={googleReviewsSummary.googleMapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary hover:underline text-sm font-medium'
          >
            Ver todas las reseñas en Google →
          </a>
        </div>

        {/* Reviews Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200'
            >
              {/* Review Header */}
              <div className='flex items-start space-x-3 mb-4'>
                <Avatar name={testimonial.author} />
                <div className='flex-1 min-w-0'>
                  <h3 className='font-semibold text-spa-dark text-sm truncate'>
                    {testimonial.author}
                  </h3>
                  <p className='text-xs text-gray-500'>{testimonial.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className='mb-3'>
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <p className='text-gray-700 text-sm leading-relaxed mb-3'>
                {testimonial.quote}
              </p>

              {/* Source Badge */}
              <div className='flex items-center text-xs text-gray-500'>
                <span>Publicado en {testimonial.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
