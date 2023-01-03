import React from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ nav = false, children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col dark:bg-black bg-white ">
        {nav && <Header />}
        <main className="wrapper">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
