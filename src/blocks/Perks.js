import React from 'react';

import Container from '../components/UI/Container';
import Title from '../components/UI/Title';
import Text from '../components/UI/Text';

export default function Perks({ data }) {
  return (
    <section className='bg-zinc-100 py-10 dark:bg-[#0d0d10] lg:py-20 '>
      <Container>
        {data?.title && (
          <Title
            Tag='h2'
            variant='xl'
            className={`mx-auto mb-4 max-w-6xl lg:mb-10`}>
            {data?.title}
          </Title>
        )}
        {data?.content && (
          <Text className={`mx-auto mt-8 max-w-3xl text-center lg:text-lg`}>
            {data?.content}
          </Text>
        )}
        <div
          className={`mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 md:gap-10 lg:grid-cols-3 `}>
          {data?.columns &&
            data?.columns.map((col, i) => (
              <div className='flex' key={i}>
                <div
                  className={`mx-auto w-72 text-center sm:text-left lg:w-80  ${
                    i % 3 === 0
                      ? 'lg:ml-0 lg:mr-auto'
                      : i % 3 === 2
                      ? 'lg:mr-0 lg:ml-auto'
                      : 'lg:mx-auto'
                  } ${i % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                  {col?.title && (
                    <Title Tag='h3' variant='xs' className='mt-2'>
                      {col.title}
                    </Title>
                  )}
                  {col?.content && (
                    <Text className={`mt-2 max-w-2xl`}>{col?.content}</Text>
                  )}
                </div>
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
