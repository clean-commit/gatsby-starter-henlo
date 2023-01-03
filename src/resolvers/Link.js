import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export default function Link({ to, className, children, ...props }) {
  const internal = /^\/(?!\/)/.test(to)
  return (
    <>
      {!internal ? (
        <a
          href={to}
          className={className}
          target="_blank"
          {...props}
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <GatsbyLink to={to} className={className} {...props}>
          {children}
        </GatsbyLink>
      )}
    </>
  )
}
