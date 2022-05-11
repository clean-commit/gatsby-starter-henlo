import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import * as seoData from '../../settings/seo.json';

export default function Seo({ data, children }) {
  const metadata = seoData;
  const metaDescription = data.description || metadata.description;
  const title = data.title || metadata.title;
  const image = data.image
    ? `${metadata.siteUrl}${getSrc(data.image)}`
    : `${metadata.siteUrl}${metadata.image}`;

  const fullTitle = `${title} ${metadata.separator} ${metadata.baseTitle}`;

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
      <meta name='twitter:image' content={image} />
      {children}
    </Helmet>
  );
}

export const query = graphql`
  fragment SEO on MarkdownRemarkFrontmatter {
    seo {
      title
      description
      image {
        childImageSharp {
          gatsbyImageData(
            width: 1200
            quality: 100
            formats: [AUTO]
            placeholder: NONE
          )
        }
      }
    }
  }
`;
