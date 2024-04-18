import React from 'react'
import Recent from '@/components/Article/Recent'
import Container from '@/components/UI/Container'
import Section from '@/components/UI/Section'

export default function RecentArticles({ data, preview }) {
  return (
    <Section
      settings={data?.settings}
      className="py-10 dark:bg-black dark:text-white lg:py-16"
    >
      <Container>
        <h2 className="mb-12 text-lg font-semibold uppercase tracking-wider md:text-xl">
          {data?.title}
        </h2>
        {preview ? 'Articles will show up here' : <Recent />}
      </Container>
    </Section>
  )
}
