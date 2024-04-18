import React from 'react'
import { cn } from '@/lib/helper'

export default function Container({ children, className }) {
  return (
    <div className={cn('container mx-auto px-5 sm:px-10', className)}>
      {children}
    </div>
  )
}
