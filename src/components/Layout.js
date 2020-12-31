import React from 'react'

import DefaultSeo from '@/components/SEO/DefaultSeo'
import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <DefaultSeo />
      <div className='h-screen'>
        {/* <Navbar /> */}
        <main className='wrapper'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
