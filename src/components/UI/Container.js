import clsx from 'clsx'
import React from 'react'

export default function Container({ children, className }) {
  return (
    <div className={clsx('container mx-auto px-5 sm:px-10', className)}>
      {children}
    </div>
  )
}
