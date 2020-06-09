const path = require('path');

module.exports = {
  siteMetadata: {
    baseTitle: 'Top Developer & Designer',
    separator: '|',
    siteUrl: `https://mrkaluzny.com`,
    title: 'mrkaluzny',
    image: '/img/meeting.jpg',
    description: 'Crafting bespoke digital experiences. If your business needs a fast, responsive website or a web app with the clean code base and modern design you found a right place!',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `mrkaluzny-1`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '',
          anonymize: true,
        },
        facebookPixel: {
          pixelId: '',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
