import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import SEO from '../helpers/SEOHelper.js';

import Layout from '../components/Layout';
import Post from '../components/Blog/Post';
import Categories from '../components/Blog/Categories';
import Img from 'gatsby-image';

import '../styles/pages/blog.scss';

const title = "Let's talk about code";
const description = "Let's talk about code or other upper-dupper important stuff, like choosing the right hosting provider or optimizing your website";
const image = '/img/blog-background.jpg';

class CategoryPageTempalate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 6,
      currentLimit: 6,
      posts: this.props.posts,
      postsToShow: this.props.posts.slice(0, 6),
      showButton: this.props.posts.length > 6,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let newLimit = this.state.currentLimit + this.state.limit;
    this.setState({
      currentLimit: newLimit,
      postsToShow: this.props.posts.slice(0, newLimit),
      showButton: this.props.posts.length > newLimit,
    });
  }

  render() {
    let posts = this.props.posts;
    console.log(this.props.category.image.childImageSharp.fluid.src);
    const button = this.state.showButton ? (
      <div className='blog__load-more'>
        <div className='btn btn--standard btn--standard-large' onClick={this.handleClick}>
          Show more
        </div>
      </div>
    ) : (
      ''
    );
    return (
      <>
        <section className='section section--large section--image'>
          <Img fluid={this.props.category.image.childImageSharp.fluid} alt='' />
          <div className='container'>
            <div className='section__title section__title--center section__title--image mb-0'>
              <h1 className='title-alt text-white text-center'>{this.props.category.title}</h1>
              <div className='text-lg text-center text-white'>{this.props.category.description}</div>
            </div>
          </div>
        </section>
        <Categories categories={this.props.categories} currentpath={this.props.category.slug} />
        <section className='section'>
          <div className='container'>
            <div className='blog__feed'>
              {this.state.postsToShow.map((item, i) => {
                return <Post article={item} key={item.id}></Post>;
              })}
              {button}
            </div>
          </div>
        </section>
      </>
    );
  }
}

class CategoryPage extends React.Component {
  render() {
    const { data } = this.props;

    const category = { ...data.category.frontmatter, slug: data.category.fields.slug };

    const articles = data.articlesData.edges
      .map((item) => {
        return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id, html: item.node.html };
      })
      .filter((item) => item.category === category.title);

    const categories = data.categories.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug };
    });
    return (
      <Layout>
        <Helmet>
          <meta name='description' content={SEO.description(category.seo.seodescription)} />
          <meta property='og:title' content={SEO.title(category.seo.seotitle ? category.seo.seotitle : category.title)} />
          <meta property='og:description' content={SEO.description(category.seo.seodescription)} />
          <title>{SEO.title(category.seo.seotitle ? category.seo.seotitle : category.title)}</title>
          <meta property='og:image' content={SEO.image(category.seo.seoimage ? category.seo.seoimage.childImageSharp.fluid.src : category.image)} />
        </Helmet>
        <CategoryPageTempalate category={category} posts={articles} categories={categories} />
      </Layout>
    );
  }
}

CategoryPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default CategoryPage;

export const categoryPageQuery = graphql`
  query CategoryPageQuery($id: String!) {
    category: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        image {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        description
        seo {
          seodescription
          seotitle
          seoimage {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    articlesData: allMarkdownRemark(filter: { frontmatter: { type: { eq: "article" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          html
          frontmatter {
            title
            author
            date(formatString: "D MMM YYYY")
            thumbnail {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            category
            excerpt
          }
        }
      }
    }
    categories: allMarkdownRemark(filter: { frontmatter: { type: { eq: "category" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
