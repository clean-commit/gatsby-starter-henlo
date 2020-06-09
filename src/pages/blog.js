import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from '../helpers/SEOHelper.js';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Post from '../components/Blog/Post';
import Categories from '../components/Blog/Categories';

import '../styles/pages/blog.scss';

const title = "Let's talk";
const description = "I'm sharing my knowledge about web development, remote work workflows and how to efficiently run business in XXI century. ";

const image = '/img/blog-background.jpg';

class BlogPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 6,
      currentLimit: 6,
      images: this.props.images,
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
    const button = this.state.showButton ? (
      <div className='blog__load-more'>
        <button className='btn btn--standard btn--standard-large' onClick={this.handleClick}>
          Show more
        </button>
      </div>
    ) : (
      ''
    );
    return (
      <>
        <section className='section section--large section--image'>
          <Img fluid={this.state.images.childImageSharp.fluid} alt='' />
          <div className='container'>
            <div className='section__title section__title--center section__title--image mb-0'>
              <h1 className='title-alt text-white text-center'>{title}</h1>
              <div className='text-lg text-center text-white'>{description}</div>
            </div>
          </div>
        </section>
        <Categories categories={this.props.categories} currentpath='/blog' />
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

class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const articles = data.articlesData.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id, html: item.node.html };
    });

    const categories = data.categories.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug };
    });
    return (
      <Layout>
        <Helmet>
          <meta name='description' content={SEO.description(description)} />
          <meta property='og:title' content={SEO.title(title)} />
          <meta property='og:description' content={SEO.description(description)} />
          <meta property='og:image' content={SEO.image(image)} />
          <title>{SEO.title(title)}</title>
        </Helmet>
        <BlogPageTemplate posts={articles} categories={categories} images={data.image} />
      </Layout>
    );
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default BlogPage;

export const blogPageQuery = graphql`
  query BlogPageQuery {
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
                  ...GatsbyImageSharpFluid
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
          }
        }
      }
    }
    image: file(relativePath: { eq: "blog-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
