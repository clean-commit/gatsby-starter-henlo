import React from 'react'
import Button from '../../UI/Button'

export default function ButtonField({ data }) {
  return (
    <div>
      <Button button={data?.button}>{data?.button?.content}</Button>
    </div>
  )
}
