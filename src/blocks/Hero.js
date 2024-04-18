import React from 'react'
import Buttons from '@/components/UI/Buttons'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Text from '@/components/UI/Text'
import { cn } from '@/lib/helper'

export default function Hero({ data }) {
  const isCentered = data?.variant === 'centered'
  const isFull = data?.variant === 'full'
  return (
    <Section
      settings={data?.settings}
      className={cn(
        'py-12 dark:bg-black dark:text-white lg:py-24',
        {
          'flex min-h-screen items-center': isFull,
        },
        {
          'flex justify-center py-20 text-center lg:py-44': isCentered,
        },
      )}
    >
      <Container>
        {data?.title && (
          <h1
            className={cn('mb-4 text-4xl font-bold md:text-6xl', {
              'mx-auto': isCentered,
            })}
          >
            {data?.title}
          </h1>
        )}
        <Text className={cn('text-lg', { 'mx-auto': isCentered })}>
          {data?.content}
        </Text>
        {data?.buttons && (
          <Buttons
            buttons={data?.buttons}
            className={cn('mt-6', { 'justify-center': isCentered })}
          />
        )}
      </Container>
    </Section>
  )
}
