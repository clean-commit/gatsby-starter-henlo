import React from 'react';
import Layout from '@/components/Layout';

const NotFoundPage = () => (
  <Layout>
    <section>
      <div className='container h-screen flex justify-center items-center text-center'>
        <div>
          <h1 className='text-3xl font-semibold'>404: Page Not Found</h1>
          <div className='mt-6 text-lg'>
            We can’t seem to find the page you’re looking for. Try going back to
            the previous page.
          </div>
          <a
            href='/'
            className='max-w-md inline-block px-4 py-2 bg-slate-500 text-white rounded-xl mx-auto mt-6'>
            Back to Home
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
