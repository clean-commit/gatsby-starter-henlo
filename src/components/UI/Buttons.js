import React from 'react'
import Button from '@/components/UI/Button'
import { cn } from '@/lib/helper'

export default function Buttons({ buttons, className }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {buttons.length > 0 &&
        buttons.map((item, i) => (
          <Button key={i} button={item?.button}>
            {item?.button?.content}
          </Button>
        ))}
    </div>
  )
}
