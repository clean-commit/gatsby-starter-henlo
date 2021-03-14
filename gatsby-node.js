const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')

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
      return Promise.reject(result.errors);
    }

    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      if (
        edge.node.frontmatter.layout == null ||
        edge.node.frontmatter.layout == 'hidden'
      ) {
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
          context: {
            id,
          },
        })
      }
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)
  if (page.path !== oldPage.path) {
    deletePage(oldPage)
    createPage(page)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
      },
    },
  })
}

exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemarkFrontmatterSeo @infer {
      title: String
      description: String
      image: File
    }
  `)
}
