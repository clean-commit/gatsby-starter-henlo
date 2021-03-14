import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'

function DefaultSeo() {
  const meta = useStaticQuery(graphql`
    query DefaultSeoQuery {
      site {
        siteMetadata {
          title
          separator
          baseTitle
          twitterHandle
          lang
          description
          keyword
          image
          themeColor
        }
      }
    }
  `)
  const metadata = meta.site.siteMetadata
  const title = metadata.title
  const lang = metadata.lang
  const { pathname } = useLocation()
  const image = `${metadata.siteUrl}${metadata.image}`
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: lang }}
      titleTemplate={`%s ${metadata.separator} ${metadata.baseTitle}`}>
      <meta name='description' content={metadata.description} />
      <meta
        property='og:title'
        content={`${metadata.title} ${metadata.separator} ${metadata.baseTitle}`}
      />
      <meta property='og:description' content={metadata.description} />
      <meta property='og:image' content={image} />
      <meta property='og:url' content={`${metadata.siteUrl}${pathname}`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:title'
        content={`${metadata.title} ${metadata.separator} ${metadata.baseTitle}`}
      />
      <meta name='twitter:description' content={metadata.description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:site' content={metadata.twitterHandle} />
      <meta name='keywords' content={metadata.keywords} />

      <meta name='msapplication-TileColor' content={metadata.themeColor} />
      <meta name='theme-color' content={metadata.themeColor} />

      <link rel='canonical' href={`${metadata.siteUrl}${pathname}`} />
      <link rel='manifest' href='/img/favicons/manifest.json' />
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
      <meta
        name='msapplication-TileImage'
        content='/img/favicons/ms-icon-144x144.png'
      />
    </Helmet>
  )
}

export default DefaultSeo
