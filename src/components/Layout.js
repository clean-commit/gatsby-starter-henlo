import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ nav = false, children }) => {
  return (
    <>
      <div className="flex min-h-screen flex-col bg-white dark:bg-black ">
        {nav && <Header />}
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
