export default function CallToAction() {
  return (
    <section className='bg-white'>
      <div className='relative sm:py-16'>
        <div aria-hidden='true' className='hidden sm:block'>
          <svg
            className='absolute top-8 left-1/2 -ml-3'
            width='404'
            height='392'
            fill='none'
            viewBox='0 0 404 392'
          >
            <defs>
              <pattern
                id='8228f071-bcee-4ec8-905a-2a059a2cc4fb'
                x='0'
                y='0'
                width='20'
                height='20'
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x='0'
                  y='0'
                  width='4'
                  height='4'
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width='404'
              height='392'
              fill='url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)'
            />
          </svg>
        </div>
        <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20'>
            <div
              aria-hidden='true'
              className='absolute inset-0 -mt-72 sm:-mt-32 md:mt-0'
            >
              <svg
                className='absolute inset-0 h-full w-full'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 1463 360'
              >
                <path
                  className='text-indigo-500 text-opacity-40'
                  fill='currentColor'
                  d='M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z'
                />
                <path
                  className='text-indigo-700 text-opacity-40'
                  fill='currentColor'
                  d='M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z'
                />
              </svg>
            </div>
            <div className='relative'>
              <div className='sm:text-center'>
                <h2 className='text-3xl font-extrabold text-white tracking-tight sm:text-4xl'>
                  Meet somebody new today!
                </h2>
                <p className='mt-6 mx-auto max-w-2xl text-lg text-indigo-200'>
                  Rapid is available from the Apple App Store or Google Play
                  Store for free. An account is not needed to chat!
                </p>
              </div>
              <div className='mt-12 mx-auto text-center'>
                <button className='inline-flex items-center justify-center px-12 py-4 rounded-md shadow-sm text-lg font-medium text-white bg-gradient-to-tr from-[#629cf7] to-[#19d9b2] hover:opacity-80'>
                  Download App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
