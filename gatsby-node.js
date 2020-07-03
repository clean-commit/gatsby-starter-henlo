const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')
const replacePath = (path) => (path === `/` ? path : path.replace(/\/$/, ``))
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              layout
              type
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      // return Promise.reject(result.errors);
    }

    // Filter out the footer, navbar, and meetups so we don't create pages for those
    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      if (edge.node.frontmatter.layout == null) {
        return false
      } else {
        return true
      }
    })

    postOrPage.forEach((edge) => {
      const id = edge.node.id
      let pathName = edge.node.fields.slug
      let component = path.resolve(
        `src/templates/${String(edge.node.frontmatter.layout)}.js`,
      )

      if (fs.existsSync(component)) {
        createPage({
          path: pathName,
          component,
          // additional data can be passed via context
          context: {
            id,
          },
        })
      }
    })
  })
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  // Remove trailing slash unless page is /
  page.path = replacePath(page.path)
  if (page.path !== oldPage.path) {
    // Replace new page with old page
    deletePage(oldPage)
    createPage(page)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    },
  })
}
