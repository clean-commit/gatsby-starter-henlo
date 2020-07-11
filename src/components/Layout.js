import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { siteMetadata } from '~/gatsby-config'

import '@/styles/main.scss'

import SEO from '@/helpers/SEOHelper'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang='en' />
        <title>{SEO.title()}</title>

        <meta name='description' content={SEO.description()} />
        <meta property='og:title' content={SEO.title()} />
        <meta property='og:description' content={SEO.description()} />
        <meta name='theme-color' content={siteMetadata.themeColor} />
        <meta property='og:image' content={SEO.image()} />
        <meta name='keywords' content={siteMetadata.keywords} />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/img/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/img/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/img/favicons/site.webmanifest' />
      </Helmet>
      <div className='h-screen'>
        <Navbar />
        <main className='wrapper'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
