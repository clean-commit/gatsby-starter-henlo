import React from 'react';
import Recent from '../components/Article/Recent';
import Container from '../components/UI/Container';

export default function RecentArticles({ data, preview }) {
  return (
    <section className='py-10 lg:py-16 dark:bg-black dark:text-white'>
      <Container>
        <h2 className='text-lg font-semibold md:text-xl tracking-wider uppercase mb-12'>
          {data?.title}
        </h2>
        {preview ? 'Articles will show up here' : <Recent />}
      </Container>
    </section>
  );
}
