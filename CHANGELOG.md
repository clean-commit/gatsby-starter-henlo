# Changelog

## 0.6.0 - March 7, 2021

**BREAKING CHANGES**

- Support for Gatsby v4 added
- Tailwind updated to v3
- Node changed to v16.13.0
- Sitemap generation switched to `gatsby-plugin-sitemap`

**Minor changes**

- Removed unused styles

**Features**

- tailwind/typography plugin added
- tailwind/forms plugin added
- added support for darkmode

## 0.5.1 - March 18, 2021

**FIX**

- Added gatsby-plugin-image to gatsby-config.js (issues with loading images)

## 0.5.0 - March 14, 2021

**BREAKING CHANGES**

- Support for Gatsby v3 added
- PurgeCSS switched to v4
- Removed support for `react-svg`, inlined svg are used instead.
- Node changed to v14.15.5

**Features**

- SEO component updated for usage with `gatsby-plugin-image` added
- `gatsby-node.js` and `gatsby-config.js` updated to support Gatsby v3

**Minor changes**

- Index page updated, version added to index page
- Changelog created

## 0.4.1 - March 4, 2021

- Added support for Twitter cards, sitemeta changed
- All routes use trailing slashes to remove 301 redirects from non slash to slash versions

## 0.4.0 - December 31, 2020

- SEO implementation strategy changed - components instead of helpers
- Brotli compression is now enabled by default
- Cleared unnecessary Gatsby Plugins
- CMS configuration setup udpdated

## 0.3.1 - September 21, 2020

- Standardized favicon generation procedure

## 0.3.1 - September 8, 2020

- Support for Tailwind 1.3.1 added
- Netlify CMS switched to Manual Initialization
- Support for better SEO optimization
- Dynamic layout selection based on keys added
