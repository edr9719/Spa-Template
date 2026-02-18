import { features } from '@/lib/business-content';

const featureIcons: Record<string, React.ReactNode> = {
  workspace_premium: (
    <svg
      className='w-10 h-10 text-primary'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m9 0H7.5M12 3.75l2.25 4.5 4.5.75-3.375 3L16.5 16.5 12 14.25 7.5 16.5l1.125-4.5L5.25 9l4.5-.75L12 3.75z'
      />
    </svg>
  ),
  sanitizer: (
    <svg
      className='w-10 h-10 text-primary'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5a2.25 2.25 0 01.75 2.25v.75a2.25 2.25 0 01-2.25 2.25H6.5a2.25 2.25 0 01-2.25-2.25v-.75A2.25 2.25 0 015 14.5m14 0H5'
      />
    </svg>
  ),
  verified_user: (
    <svg
      className='w-10 h-10 text-primary'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
      />
    </svg>
  ),
  auto_awesome: (
    <svg
      className='w-10 h-10 text-primary'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={1.5}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
      />
    </svg>
  ),
};

export default function Features() {
  return (
    <section
      id='experiencia'
      className='py-24 bg-spa-cream border-y border-primary/10'
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0'>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`md:px-8 flex flex-col items-center text-center ${
                i < features.length - 1
                  ? 'border-l-0 md:border-r border-primary/30'
                  : ''
              }`}
            >
              <div className='mb-6'>
                {featureIcons[feature.icon] ?? (
                  <div className='w-10 h-10 rounded-full bg-primary/20' />
                )}
              </div>
              <h5 className='text-sm uppercase tracking-widest font-bold mb-4'>
                {feature.title}
              </h5>
              <p className='text-xs text-spa-dark/60 leading-loose'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
