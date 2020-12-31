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

  const metadata = meta.site.siteMetadata
  const metaDescription = data.description || metadata.description
  const title = data.title || metadata.title

  return (
    <Helmet
      title={title}
      titleTemplate={`%s ${metadata.separator} ${metadata.baseTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}>
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
