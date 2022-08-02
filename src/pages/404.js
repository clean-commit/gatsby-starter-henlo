import React from 'react';
import Layout from '@/components/Layout';
import Container from '../components/UI/Container';
import Link from '../resolvers/Link';

const NotFoundPage = () => (
  <Layout nav>
    <section>
      <Container className='h-screen flex justify-center items-center text-center'>
        <div>
          <h1 className='text-9xl font-bold dark:text-white'>404.</h1>
          <h2 className='text-4xl font-bold dark:text-white'>Page Not Found</h2>
          <div className='max-w-md mx-auto mt-6 text-xl dark:text-white'>
            We can’t seem to find the page you’re looking for. Try going back to
            the previous page.
          </div>
          <Link
            to='/'
            className='max-w-md inline-block px-6 py-3 bg-black dark:bg-white dark:text-black text-white mx-auto mt-6 lowercase font-bold text-lg tracking-tight'>
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  </Layout>
);

export default NotFoundPage;
