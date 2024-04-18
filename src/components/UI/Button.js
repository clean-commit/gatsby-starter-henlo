import React from 'react'
import { cn } from '@/lib/helper'
import Link from '@/resolvers/Link'

export default function Button({ className, button, children, ...props }) {
  let buttonStyle = 'group inline-block font-bold text-dark-500 dark:text-white'
  switch (button?.variant) {
    case 'button':
      buttonStyle = `${buttonStyle} border-dark-500 border dark:border-white bg-dark-500 dark:bg-white text-black dark:text-black py-2 px-6 text-center dark:hover:bg-transparent hover:bg-transparent hover:text-dark-500 dark:hover:text-white transition-colors`
      break
    case 'outlined':
      buttonStyle = `${buttonStyle} border-dark-500 border dark:border-white py-2 px-6 text-center dark:hover:bg-white hover:bg-dark-500 hover:text-white dark:hover:text-black transition-colors`
      break
    default:
      buttonStyle = `${buttonStyle} link dark:link-dark`
  }

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={cn(buttonStyle, className)}
          {...props}
        >
          {children}
        </Link>
      ) : (
        <button className={cn(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  )
}
