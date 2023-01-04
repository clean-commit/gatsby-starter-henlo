# Changelog

## 1.1.0 - January 4, 2022

**BREAKING CHANGES**
- Support for Gatsby v5 added
- `react-helmet` removed, SEO partials moved to Head API
- `yarn start` renamed to `yarn dev`

**Minor changes**
- `classnames` removed, `clsx` added
- Language definition added to `gatsby-ssr.js`
- Removed unnused packages

**Bug Fixes**
- Improved darkmode toggle component - issue with hydration
- Resolved minor warnings issues

## 1.0.1 - October 22, 2022

**Minor changes**

- Packages bumped
- Dependabot changes

## 1.0.0 - August 12, 2022

Complete overhaul of the previous starters.

New features:

- 💪 Battle-tested starting point for small & large web projects
- 📄 Form Builder that enables Admins to create multiple forms with ease & Netlify Forms integration.
- 🌗 Darkmode support
- 🗺 Sitemaps using `gatsby-plugin-sitemap`
- 💇‍♀️ TailwindCSS support with PostCSS processing & PurgeCSS
- 🔌 Support for Gatsby API functions
- 🕵️‍♂️ Complete SEO configuration with graphql fragment and reusable components
  ..and more

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
