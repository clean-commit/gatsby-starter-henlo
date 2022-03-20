import React from 'react';

export default function Hero({ data }) {
  console.log(data);
  return (
    <section className='py-12'>
      <div className='container mx-auto'>
        <h1 className='text-5xl mb-4'>{data.title}</h1>
        <p>{data.content}</p>
      </div>
    </section>
  );
}
