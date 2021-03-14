const path = require('path')
const tailwind = require('tailwindcss')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter',
    separator: '|',
    baseTitle: 'Henlo.',
    lang: 'en',
    twitterHandle: '@cleancommit',
    siteUrl: `localhost:8000`,
    image: '',
    themeColor: '#fff',
    keyword: 'gatsby-starter, blazing fast static site',
    description: 'Blazing fast static site with Henlo',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-brotli',
    },
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
              maxWidth: 1000,
              quality: 72,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    {
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
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          tailwind,
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        develop: false, 
        tailwind: true,
        purgeCSSOptions: {
          safelist: {
            standard: [],
            deep: [],
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@': path.join(__dirname, 'src'),
        '~': path.join(__dirname, ''),
        styles: path.join(__dirname, 'src/styles'),
        img: path.join(__dirname, 'static/img'),
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
