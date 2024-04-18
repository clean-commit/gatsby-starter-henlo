import React from 'react'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'
import Text from '@/components/UI/Text'

export default function Content({ data }) {
  return (
    <Section settings={data?.settings} className="py-10 lg:py-16">
      <Container>
        {data?.content && (
          <Text className="mx-auto w-full max-w-6xl">{data?.content}</Text>
        )}
      </Container>
    </Section>
  )
}
