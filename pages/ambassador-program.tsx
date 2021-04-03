import { useRef } from 'react';
import Head from 'next/head';
import emailjs from 'emailjs-com';
import Layout from '../components/Layout';

export default function AmbassadorProgram() {
  const firstName = useRef<HTMLInputElement>(null);
  const socialPlatform = useRef<HTMLSelectElement>(null);
  const socialHandleUsername = useRef<HTMLInputElement>(null);
  const emailAddress = useRef<HTMLInputElement>(null);
  const referenceID = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs.init('user_JEOTNb8LgvYhxXk9I0iOD');

    emailjs
      .sendForm('ambassador_program_form', 'ambassador_program_form', e.target)
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            if (firstName.current) {
              firstName.current.value = '';
            }
            if (socialPlatform.current) {
              socialPlatform.current.value = 'TikTok';
            }
            if (socialHandleUsername.current) {
              socialHandleUsername.current.value = '';
            }
            if (emailAddress.current) {
              emailAddress.current.value = '';
            }
            if (referenceID.current) {
              referenceID.current.value = '';
            }
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Layout>
      <Head>
        <title>Rapid App | Ambassador Program</title>

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

      <main className='max-w-4xl mx-auto py-24 px-8'>
        <form
          className='space-y-8 divide-y divide-gray-200'
          onSubmit={handleSubmit}
        >
          <div className='space-y-8 divide-y divide-gray-200'>
            <div>
              <div>
                <h3 className='text-2xl leading-6 font-medium text-gray-900 mb-5'>
                  Ambassador Program Form
                </h3>
                <p className='text-sm text-gray-500'>
                  This program is designed for remarkable individuals who
                  provide aunique experience that exemplifies ingenuity of the
                  wider community of Rapid.
                </p>
                <ul className='text-gray-700 font-medium text-base pl-6 py-10'>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Official partner of Rapid</p>
                  </li>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Distinguished partner badge on app</p>
                  </li>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Future merch packages</p>
                  </li>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Early access to new features</p>
                  </li>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Partner-only in-app perks</p>
                  </li>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Priority contact with Rapid support</p>
                  </li>
                  <li className='flex items-center gap-3 mb-3'>
                    <div className='h-5 w-5 text-green-600'>
                      <svg
                        viewBox='0 0 24 24'
                        focusable='false'
                        role='presentation'
                      >
                        <g
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                          <path d='M22 4L12 14.01l-3-3'></path>
                        </g>
                      </svg>
                    </div>
                    <p>Grow your community through events</p>
                  </li>
                </ul>
              </div>

              <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='first_name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <div className='mt-1 flex rounded-md shadow-sm'>
                    <input
                      ref={firstName}
                      required={true}
                      type='text'
                      name='first_name'
                      id='first_name'
                      className='flex-1 focus:ring focus:ring-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300 border py-0.5 px-1 outline-none'
                    />
                  </div>
                </div>

                <div className='sm:col-span-3'>
                  <label
                    htmlFor='social_platform'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Preferred social platform
                  </label>
                  <div className='mt-1'>
                    <select
                      ref={socialPlatform}
                      required={true}
                      id='social_platform'
                      name='social_platform'
                      className='flex-1 focus:ring focus:ring-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300 border py-0.5 px-1 outline-none'
                    >
                      <option>TikTok</option>
                      <option>Instagram</option>
                      <option>Discord</option>
                    </select>
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='social_handle_username'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Social handle username
                  </label>
                  <div className='mt-1 flex rounded-md shadow-sm'>
                    <input
                      ref={socialHandleUsername}
                      required={true}
                      type='text'
                      name='social_handle_username'
                      id='social_handle_username'
                      className='flex-1 focus:ring focus:ring-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300 border py-0.5 px-1 outline-none'
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='email_address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email address
                  </label>
                  <div className='mt-1 shadow-sm'>
                    <input
                      ref={emailAddress}
                      required={true}
                      id='email_address'
                      name='email_address'
                      type='email'
                      autoComplete='email'
                      className='flex-1 focus:ring focus:ring-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300 border py-0.5 px-1 outline-none'
                    />
                  </div>
                </div>

                <div className='sm:col-span-4'>
                  <label
                    htmlFor='reference_id'
                    className='flex gap-4 items-center text-sm font-medium text-gray-700'
                  >
                    <span>Reference ID</span>
                    <span className='rounded bg-yellow-100 px-1.5 py-1 text-xs font-semibold text-yellow-500 tracking-wide uppercase'>
                      Optional
                    </span>
                  </label>
                  <div className='mt-1 flex rounded-md shadow-sm'>
                    <input
                      ref={referenceID}
                      type='text'
                      name='reference_id'
                      id='reference_id'
                      className='flex-1 focus:ring focus:ring-cyan-500 block w-full min-w-0 rounded-md sm:text-sm border-gray-300 border py-0.5 px-1 outline-none'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </main>
    </Layout>
  );
}
