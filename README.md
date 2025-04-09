![Henlo Starter](https://repository-images.githubusercontent.com/270961687/4085d990-9083-451d-b39b-5316579adf09)

# Gatsby Starter Henlo (v1.3.0)

[![Netlify Status](https://api.netlify.com/api/v1/badges/43532afb-3488-432b-8185-a745645a90d8/deploy-status)](https://app.netlify.com/sites/henlo/deploys)

[Official Website / Demo](http://henlo.cleancommit.io)

Gatsby Starter Henlo is the most advanced Decap CMS starter for Gatsby.js. We built it with Page Builder setup in mind. All pages are created out of programmable blocks, aiming to provide the best DX & admin UX possible.

This repo contains an example website that is built with [Gatsby](https://www.gatsbyjs.com/docs/), and [Decap CMS](https://decapcms.org/docs/intro/).

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Features

- 💇‍♀️ TailwindCSS V4 support with PostCSS & Tailwind Merge
- Support for Gatsby v5
- 💪 Battle-tested starting point for small & large web projects
- 📄 Form Builder that enables Admins to create multiple forms with ease & Netlify Forms integration.
- 🌗 Darkmode support
- 🗺 Sitemaps using `gatsby-plugin-sitemap`
- 🔥 Perfect score on Lighthouse for SEO, Accessibility and Performance
- 🔌 Support for Gatsby API functions
- 🎇 Crazy fast images with `gatsby-plugin-image`
- 🕵️‍♂️ Complete SEO configuration with graphql fragment and reusable components based on Head API
- Netlify deploy configuration
- Example pages, collections, CMS configuration with Decap CMS & hooks
- Readme template for custom projects
- Easy Decap CMS configuration using [Manual Initialization](https://decapcms.org/docs/manual-initialization/#gatsby-focus-wrapper)
- ..and more

## Prerequisites

- Node 20
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended)

Decap CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/clean-commit/gatsby-starter-henlo"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Getting Started (Without Netlify)

```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/clean-commit/gatsby-starter-henlo
$ cd [SITE_DIRECTORY_NAME]
$ yarn dev
```

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step

```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn && yarn dev
```

To test the CMS locally, you'll need to start your local development server & [run local instance of Decap CMS](https://decapcms.org/docs/working-with-a-local-git-repository)

```
$ yarn dev
$ yarn cms
// or
$ npx decap-server
```

Your admin configuration will be available at http://localhost:8000/admin

### Deployment

We've added additional commands for quick deployments with Netlify CLI. To deploy the website to Netlify simply run.

```
$ yarn deploy:prod
```

The website will build locally and then deploy to production.

Before deploying to Netlify, you need to:

- Define GATSBY_APP_URL to your domain
- Update redirects in netlify.toml to reflect your website (example is set up)

### Folder structure

```
├── cms                      # Decap CMS configuration
│   ├── blocks
│   ├── collections
│   ├── fields
│   ├── previews
│   └── cms.js
├── content                  # Your content lives here
│   ├── authors
│   ├── blog
│   ├── forms
│   └── pages
├── public
├── src
│   ├── api                  # Gatsby functions should be placed here
│   ├── blocks               # Blocks that create sections
│   ├── components           # Reusable components
│   │   └── UI               # UI specialized components
│   ├── hooks                # Hooks used in the project
│   ├── lib                  # misc
│   ├── pages
│   ├── resolvers
│   │   ├── Image.js         # Required for previews
│   │   └── Link.js          # Resolves links to gatsby and outside links
│   ├── settings             # Place for theme settings
│   ├── styles
│   └── templates            # Templates used to render page types
│       ├── page-builder.js
│       └── post.js
├── static
├── _headers
├── .env.example             # Example env -> GATSBY_APP_URL is required to run the app
├── gatsby-config.js         # Config files for gatsby
├── gatsby-node.js           # Page generation setup & types interferrence
└── tailwind.config.js       # Tailwind configuration
```

### Setting up the CMS

Follow the [Decap CMS Quick Start Guide](https://decapcms.org/docs/gatsby/#enable-identity-and-git-gateway) to set up authentication, and hosting.

**Important**
This template can be mostly changed by the user within the CMS itself (Settings type). For sitemaps to work correctly, you'll need to provide ENV variable `GATSBY_APP_URL` which defaults to https://example.com, this url will be used in setting up meta values in the head of the documents and links URL in the CMS.

CMS configuration was placed within `cms` directory in the root of the project. This allows us to work efficiently on fields and collections without mixing CMS config with Gatsby code.

Henlo uses Manual Initialization to take advantage of componetized approach to managing configuration for Decap CMS. Thanks to that you don't have to control the CMS from centralized YAML file.

To ensure best experience we use 2 custom widgets that are maintained by us -> [ID Widget](https://github.com/clean-commit/netlify-cms-widget-id) that provides unmutable IDs for content items and [Permalink Widget](https://github.com/clean-commit/netlify-cms-widget-permalink) that enables you to create custom permalinks with ease.

```javascript
import CMS from 'decap-cms-app'
import { Widget as UuidWidget } from 'netlify-cms-widget-id'
import { Widget as PermalinkWidget } from 'netlify-cms-widget-permalink'
import authors from './collections/authors'
import pages from './collections/pages'
import posts from './collections/posts'
import settings from './collections/settings'
import PagePreview from './previews/Page'

// Preview for all PageBuilder based pages

const config = {
  config: {
    load_config_file: false,
    display_url: process.env.GATSBY_APP_URL, // Enables urls based on env variable
    local_backend: true,
    backend: {
      name: 'git-gateway',
    },
    slug: {
      encoding: 'ascii',
      clean_accents: true,
    },
    media_folder: '/static/img',
    public_folder: '/img',
    collections: [pages, posts, authors, settings],
  },
}

CMS.registerPreviewStyle('../commons.css')
CMS.registerPreviewTemplate('pages', PagePreview)

CMS.registerWidget(UuidWidget)
CMS.registerWidget(PermalinkWidget)

CMS.init(config)
```

#### Adding blocks

Blocks are defined in `cms/blocks/index.js` file. We're leveraging use of exported functions and variables from other fields to avoid repetition within the code.

This is extremely important due to the way GraphQL works with Markdown based files. Each field will have to be present on all page queries -> we can't differetiate between different sections.

That's why it's important to reuse names of fields, hence usage of imports.

```javascript
import { Buttons, Title, Content, SelectField, ImageField } from '../fields';

const Config = {
  label: 'Blocks',
  name: 'blocks',
  widget: 'list',
  types: [
    {
      label: 'Hero',
      name: 'hero',
      widget: 'object',
      fields: [
        Title,
        Content,
        Buttons,
        SelectField('default', ['default', 'centered', 'full']),
      ],
    },
...
```

To add new block you have tp add new `Type` to `cms/blocks/index.js` file, and modify `Blocks` fragment located in `src/components/PageBuilder.js`

As you can see below we're adding all fields used by all sections. This causes issues with Gatsby's [Schema Inference](https://www.gatsbyjs.com/docs/schema-inference/). Gatsby needs an example of the field to know what type of field it is.

That's why we rely on `dont-remove.md` this file contains all possible fields used in the starter, so you're never encounter a problem with types inference!

```
export const query = graphql`
  fragment Blocks on MarkdownRemarkFrontmatter {
    blocks {
      type
      title
      content
      columns {
        title
        content
      }
      photo {
        image {
          childImageSharp {
            gatsbyImageData(
              width: 800
              quality: 72
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        alt
      }
      variant
      buttons {
        button {
          content
          url
          variant
        }
      }
    }
  }
`
```

To keep the GraphQL query small, we opt to reuse the field names across blocks, but if new type is added it has to be defined in graphql using createSchemaCustomization function. **Without the definition you may encounter errors** during build process.

### Adding Favicons

Favicons can be generated using this [Favicon Generator](https://www.favicon-generator.org/) After generating the icons, drop the contents of downloaded file into `static/img/favicons` directory

### Preloading fonts

Since 0.4.0 Henlo supports [`gatsby-plugin-preload-fonts`](https://www.gatsbyjs.com/plugins/gatsby-plugin-preload-fonts/) plugin out of the box. To create the preload cache you need to start development server and then run `preload-fonts` command. This will generate the `font-preload-cache.json` file in the root of your project. When your projects builds fonts will be added automatically to head of the document.

```
yarn dev
yarn preload-fonts
```

## Browser support

Gatsby tends to add a lot of polyfills to support older browser versions. In package.json file you can adjust which sites your project should support. As default Henlo will use `defaults` setting. If you want to learn more about the browser support visit official [Gatsby How-To Guide on this subject](https://www.gatsbyjs.com/docs/how-to/custom-configuration/browser-support/)

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).

# Additional guides

Here's a list of helpful articles that will help you with your first steps using Henlo!

- [Efficient Decap CMS config with Manual Initialization](https://mrkaluzny.com/blog/dry-netlify-cms-config-with-manual-initialization?utm_source=GitHub&utm_medium=henlo-gatsby)
- [How to optimize SEO with Gatsby & Netlify](https://mrkaluzny.com/blog/how-to-optimize-seo-with-gatsby-netlify?utm_source=GitHub&utm_medium=henlo-gatsby)
- [Full Text Search with Gatsby & Decap CMS](https://mrkaluzny.com/blog/full-text-search-with-gatsby-and-netlify-cms?utm_source=GitHub&utm_medium=henlo-gatsby)
