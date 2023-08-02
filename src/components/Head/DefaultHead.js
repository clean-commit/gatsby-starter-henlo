import React from 'react';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { getSrc } from 'gatsby-plugin-image';
import * as seoData from '../../settings/seo.json';

export default function DefaultHead({ data, children }) {
  const { pathname } = useLocation();
  const metadata = { ...seoData, siteUrl: process.env.GATSBY_APP_URL };
  const metaDescription = data?.description || metadata?.description;
  const title = data?.title || metadata?.title;
  const image = data?.ogimage?.childImageSharp
    ? `${metadata.siteUrl}${getSrc(data?.ogimage)}`
    : `${metadata.siteUrl}${metadata.image}`;

  const fullTitle = `${title} ${metadata.separator} ${metadata.baseTitle}`;

  return (
    <>
      <title id='t'>{fullTitle}</title>
      <meta id='description' name='description' content={metaDescription} />
      <meta id='ot' property='og:title' content={fullTitle} />
      <meta
        id='ou'
        property='og:url'
        content={`${metadata.siteUrl}${pathname}`}
      />
      <meta id='oty' property='og:type' content='website' />
      <meta id='oi' property='og:image' content={image} />
      <meta id='od' property='og:description' content={metaDescription} />
      <meta id='tt' name='twitter:title' content={fullTitle} />
      <meta id='ti' name='twitter:image' content={image} />
      <meta id='td' name='twitter:description' content={metaDescription} />
      {children}
      <meta name='msapplication-TileColor' content={metadata.themeColor} />
      <meta name='theme-color' content={metadata.themeColor} />
      <meta name='twitter:card' content='summary_large_image' />
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
    </>
  );
}

export const query = graphql`
  fragment Seo on MarkdownRemarkFrontmatter {
    seo {
      title
      description
      ogimage {
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
