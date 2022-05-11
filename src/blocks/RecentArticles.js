import React from 'react';
import Recent from '../components/Article/Recent';

export default function RecentArticles({ data, preview }) {
  return (
    <section className='py-12 lg:py-24 dark:bg-black dark:text-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-xl font-semibold md:text-xl tracking-wider uppercase mb-12'>
          {data?.title}
        </h2>
        {preview ? 'Articles will show up here' : <Recent />}
      </div>
    </section>
  );
}
