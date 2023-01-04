import React from 'react'
import nav from '../settings/main.json'
import Link from '../resolvers/Link'

import DarkmodeToggle from './DarkmodeToggle'
import Container from './UI/Container'

export default function Header() {
  return (
    <header className="flex h-16 border-b bg-white text-black dark:border-zinc-800 dark:bg-black dark:text-white">
      <Container className="m-auto flex items-center justify-between gap-20">
        <Link to="/" className="text-2xl font-bold ">
          Henlo.
        </Link>
        <div className="flex items-center">
          <nav className="flex gap-4">
            {nav.nav.map((item, i) => (
              <Link to={item.permalink} key={i}>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-zinc-800">
            <DarkmodeToggle />
            <a
              href="https://github.com/clean-commit/gatsby-starter-henlo"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 block text-slate-400 transition-colors hover:text-slate-500 dark:hover:text-slate-300"
            >
              <div className="sr-only">Henlo on GitHub</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
