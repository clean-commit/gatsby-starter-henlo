import React from 'react'
import Text from '@/components/UI/Text'

export default function ContentSection({ data }) {
  return (
    <div>
      <Text className="text-sm">{data?.content}</Text>
    </div>
  )
}
