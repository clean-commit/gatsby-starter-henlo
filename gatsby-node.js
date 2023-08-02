const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const defs = `
  type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
  }
  
  type MarkdownRemarkFrontmatter {
    id: String
    title: String
    seo: MarkdownRemarkFrontmatterSeo
    blocks: [MarkdownRemarkFrontmatterBlocks]
  }
  
  type MarkdownRemarkFrontmatterBlocks {
    type: String
    photo: MarkdownRemarkFrontmatterBlocksPhoto
  }

  type MarkdownRemarkFrontmatterBlocksPhoto @dontInfer  {
    alt: String
    image: File @fileByRelativePath
  }

  type MarkdownRemarkFrontmatterSeo {
    title: String
    description: String
    ogimage: File @fileByRelativePath
  }`;
  createTypes(defs);
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 3000
        filter: { frontmatter: { layout: { nin: ["hidden", null] } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              id
              layout
              permalink
              type
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      console.log('errors', results.errors);
      result.errors.forEach((e) => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const postOrPage = result.data.allMarkdownRemark.edges.filter((edge) => {
      let layout = edge.node.frontmatter.layout;
      const excludes = [null, 'hidden', 'Category'];
      return excludes.indexOf(layout) === -1 ? true : false;
    });

    postOrPage.forEach((edge) => {
      const id = edge.node.id;
      let pathName = edge.node.frontmatter.permalink || edge.node.fields.slug;
      let component = path.resolve(
        `src/templates/${String(edge.node.frontmatter.layout)}.js`,
      );

      if (fs.existsSync(component)) {
        createPage({
          path: pathName,
          component,
          context: {
            id,
          },
        });
      }
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = Object.assign({}, page);
  if (page.path !== oldPage.path) {
    deletePage(oldPage);
    createPage(page);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

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
  });
};
