import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import PhoneDemo from '../components/PhoneDemo';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Rapid App</title>

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='theme-color' content='#ffffff' />
      </Head>

      <div className='bg-white pb-8 sm:pb-12 lg:pb-12'>
        <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24'>
            <div>
              <div>
                <div className='animated-peace-sign h-20 w-14 relative'>
                  <Image
                    src='/images/peace-sign-emoji.svg'
                    alt='Peace Sign'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </div>
              <div className='mt-12'>
                <div>
                  <a href='#' className='inline-flex space-x-4'>
                    <span className='rounded bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-600 tracking-wide uppercase'>
                      Rapid App
                    </span>
                    <span className='inline-flex items-center text-sm font-medium text-cyan-600 space-x-1'>
                      <span>Meet the team</span>
                      <svg
                        className='h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
                <div className='mt-6 sm:max-w-xl'>
                  <h1 className='text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                    Chat with someone random about anything.
                  </h1>
                  <ul className='mt-6 text-xl text-gray-500'>
                    <li>
                      Enter a conversation with someone completely random,
                      anonymously.
                    </li>
                    <li>Chat about whatever you want, however you want.</li>
                  </ul>
                </div>

                <div className='mt-12'>
                  <a
                    href='#'
                    className='inline-flex items-center justify-center px-8 py-3 rounded-md shadow-sm text-md font-medium text-white bg-gradient-to-tr from-[#629cf7] to-[#19d9b2] hover:opacity-80'
                  >
                    Download App
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
            <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
              <div className='hidden sm:block'>
                <svg
                  className='absolute top-24 right-1/2 -mr-3 lg:left-20'
                  width='404'
                  height='392'
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='837c3e70-6c3a-44e6-8854-cc48c737b659'
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
                    fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                  />
                </svg>
              </div>
              <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
                <Image
                  src='/images/mockup.png'
                  alt='Rapid App mockup'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
