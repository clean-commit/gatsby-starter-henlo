import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export default function DarkmodeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        return (
          <button
            onClick={(e) => toggleTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block dark:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:block hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div className="sr-only">Switch color theme</div>
          </button>
        )
      }}
    </ThemeToggler>
  )
}
