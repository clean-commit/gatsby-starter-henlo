import clsx from 'clsx'
import React from 'react'
import Button from './Button'

export default function Buttons({ buttons, className }) {
  return (
    <div className={clsx('flex flex-wrap items-center gap-2', className)}>
      {buttons.length > 0 &&
        buttons.map((item, i) => (
          <Button key={i} button={item?.button}>
            {item?.button?.content}
          </Button>
        ))}
    </div>
  )
}
