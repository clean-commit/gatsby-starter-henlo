import React from 'react'
import Image from '../resolvers/Image'
import Container from '../components/UI/Container'
import Text from '../components/UI/Text'
import Title from '../components/UI/Title'
import Buttons from '../components/UI/Buttons'
import clsx from 'clsx'

export default function ContentImage({ data }) {
  const isReversed = data?.variant === 'reversed'
  return (
    <section className="py-20 lg:py-32">
      <Container className="max-w-7xl">
        <div
          className={clsx(
            'flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-10',
            { 'md:flex-row-reverse': isReversed },
            { 'md:flex-row': !isReversed },
          )}
        >
          <div className="lg:w-1/2">
            {data?.photo?.image && (
              <Image
                src={data?.photo?.image}
                alt={data?.photo?.alt}
                className="w-full"
              />
            )}
          </div>
          <div className="lg:w-1/2">
            <div className="mx-auto max-w-2xl">
              {data?.title && (
                <Title Tag="h2" variant="lg">
                  {data?.title}
                </Title>
              )}
              {data?.content && (
                <Text className="mt-4 lg:text-lg lg:leading-relaxed">
                  {data?.content}
                </Text>
              )}
              {data?.buttons && (
                <Buttons buttons={data?.buttons} className="mt-4" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
