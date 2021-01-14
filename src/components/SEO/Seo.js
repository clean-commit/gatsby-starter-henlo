import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

function SEO({ data, children }) {
  const meta = useStaticQuery(graphql`
    query MetaDataQuery {
      site {
        siteMetadata {
          title
          separator
          baseTitle
          description
          keyword
          image
        }
      }
    }
  `)

  console.log(data)

  const metadata = meta.site.siteMetadata
  const metaDescription = data.description || metadata.description
  const title = data.title || metadata.title
  const image = data.image
    ? data.image.childImageSharp.fluid.src
    : metadata.image

  const fullTitle = `${title} ${metadata.separator} ${metadata.baseTitle}`

  return (
    <Helmet
      title={title}
      titleTemplate={`%s ${metadata.separator} ${metadata.baseTitle}`}>
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={fullTitle} />
      <meta property='og:image' content={image} />
      <meta property='og:description' content={metaDescription} />
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={metaDescription} />
      {children}
    </Helmet>
  )
}

export default SEO

export const query = graphql`
  fragment SEO on MarkdownRemarkFrontmatter {
    seo {
      title
      description
      image {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  }
`
