import React from 'react'
import Layout from '@/components/Layout'
import Container from '@/components/UI/Container'
import Link from '@/resolvers/Link'

const NotFoundPage = () => (
  <Layout nav>
    <section>
      <Container className="flex h-screen items-center justify-center text-center">
        <div>
          <h1 className="text-9xl font-bold dark:text-white">404.</h1>
          <h2 className="text-4xl font-bold dark:text-white">Page Not Found</h2>
          <div className="mx-auto mt-6 max-w-md text-xl dark:text-white">
            We can’t seem to find the page you’re looking for. Try going back to
            the previous page.
          </div>
          <Link
            to="/"
            className="mx-auto mt-6 inline-block max-w-md bg-black px-6 py-3 text-lg font-bold lowercase tracking-tight text-white dark:bg-white dark:text-black"
          >
            Back to Home
          </Link>
        </div>
      </Container>
    </section>
  </Layout>
)

export default NotFoundPage
