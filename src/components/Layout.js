import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

import { siteMetadata } from '~/gatsby-config'

import '@/styles/main.scss'

import SEO from '@/helpers/SEOHelper'

const TemplateWrapper = ({ children, hideNav }) => {
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
          sizes='57x57'
          href='/img/favicons/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/img/favicons/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/img/favicons/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/img/favicons/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/img/favicons/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/img/favicons/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/img/favicons/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/img/favicons/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/img/favicons/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/img/favicons/android-icon-192x192.png'
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
          sizes='96x96'
          href='/img/favicons/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/img/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/img/favicons/manifest.json' />
        <meta
          name='msapplication-TileImage'
          content='/img/favicons/ms-icon-144x144.png'
        />
        <meta
          name='msapplication-TileColor'
          content={siteMetadata.themeColor}
        />
        <meta name='theme-color' content={siteMetadata.themeColor} />
      </Helmet>
      <div className='h-screen'>
        {hideNav === true ? '' : <Navbar />}
        <main className='wrapper'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
