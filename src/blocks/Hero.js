import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function Hero({ data }) {
  return (
    <section className='py-12 lg:py-24 dark:bg-black dark:text-white'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl md:text-5xl mb-4'>{data.title}</h1>
        <ReactMarkdown className='prose prose-lg dark:prose-invert'>
          {data.content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
