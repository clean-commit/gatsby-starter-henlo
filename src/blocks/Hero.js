import React from 'react';
import Buttons from '../components/UI/Buttons';
import Container from '../components/UI/Container';
import Text from '../components/UI/Text';

export default function Hero({ data }) {
  console.log(data);
  return (
    <section
      className={`py-12 lg:py-24 dark:bg-black dark:text-white ${
        data?.variant == 'full' ? 'min-h-screen flex items-center' : ''
      }`}>
      <Container>
        {data?.title && (
          <h1 className='text-4xl md:text-6xl mb-4 font-bold'>{data?.title}</h1>
        )}
        <Text className='text-lg'>{data?.content}</Text>
        {data?.buttons.length > 0 && <Buttons buttons={data?.buttons} />}
      </Container>
    </section>
  );
}
