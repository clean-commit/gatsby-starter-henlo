# Changelog

**0.5.0 - March 14, 2021**
BREAKING CHANGE

- Support for Gatsby v3 added
- PurgeCSS switched to v4
- Removed support for `react-svg`, inlined svg are used instead.

Features

- SEO component updated for usage with `gatsby-plugin-image` added
- `gatsby-node.js` and `gatsby-config.js` updated to support Gatsby v3

Minor changes

- Index page updated, version added to index page
- Changelog created

**0.4.1 - March 4, 2021**

- Added support for Twitter cards, sitemeta changed
- All routes use trailing slashes to remove 301 redirects from non slash to slash versions

**0.4.0 - December 31, 2020**

- SEO implementation strategy changed - components instead of helpers
- Brotli compression is now enabled by default
- Cleared unnecessary Gatsby Plugins
- CMS configuration setup udpdated

**0.3.1 - September 21, 2020**

- Standardized favicon generation procedure

**0.3.1 - September 8, 2020**

- Support for Tailwind 1.3.1 added
- Netlify CMS switched to Manual Initialization
- Support for better SEO optimization
- Dynamic layout selection based on keys added
