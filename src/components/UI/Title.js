import clsx from 'clsx'
import React from 'react'

export default function Title({
  children,
  variant = 'base',
  Tag = 'h2',
  className,
  ...props
}) {
  let style = 'dark:text-white font-semibold'
  switch (variant) {
    case 'hero':
      style = `${style} text-5xl lg:text-7xl max-w-5xl mb-4 md:mb-8 hero-title`
      break
    case 'xl':
      style = `${style} text-4xl md:text-5xl`
      break
    case 'lg':
      style = `${style} text-3xl md:text-4xl`
      break
    case 'base':
    default:
      style = `${style} text-2xl md:text-3xl`
      break
    case 'sm':
      style = `${style} text-2xl`
      break
    case 'xs':
      style = `${style} text-xl`
      break
  }
  return (
    <>
      {children && (
        <Tag
          className={clsx(style, className)}
          dangerouslySetInnerHTML={{ __html: children }}
          {...props}
        />
      )}
    </>
  )
}
