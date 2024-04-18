import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Text from '@/components/UI/Text'
import Title from '@/components/UI/Title'
import { cn } from '@/lib/helper'
import Image from '@/resolvers/Image'

export default function ContentImage({ data }) {
  const isReversed = data?.variant === 'reversed'
  return (
    <Section settings={data?.settings} className="py-20 lg:py-32">
      <Container className="max-w-7xl">
        <div
          className={cn(
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
    </Section>
  )
}
