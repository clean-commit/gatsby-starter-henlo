import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Partners from '../components/Partners';
import TestimonialSlider from '../components/TestimonialSlider';
import Post from '../components/Blog/Post';

import '../styles/pages/front-page.scss';

function scroll() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}
export const HomePageTemplate = ({ services, testimonials, projects, articles, images }) => {
  return (
    <>
      <section className='hero'>
        <div className='hero__wrapper'>
          <div className='hero__content' data-aos='fade-up'>
            <div className='hero__content__inner'>
              <h1 className='title-alt'>
                Crafting <br /> bespoke digital experiences<span>.</span>
              </h1>
              <h2 className='text-lg'>
                My name is <strong>Wojciech Kałużny</strong> and I specilize in working with React and Vue, PHP (Laravel & WordPress) and Node.js.
              </h2>
              <p className='text-lg'>If your business needs a fast, responsive website or a web app with the clean code base and modern design you just found a right guy for the job!</p>
              <div
                onClick={() => {
                  scroll();
                }}
                className='btn-underlined btn-underlined--large animate-link'>
                Check out my services
              </div>
            </div>
          </div>
          <Img fluid={images.collaboration.childImageSharp.fluid} data-aos='fade-left' className='hero__image' />
        </div>
      </section>

      <hr className='hr hr--left' />
      <Partners />

      <section className='section section--large' id='services'>
        <div className='container'>
          <div className='services'>
            <Img fluid={images.services.childImageSharp.fluid} data-aos='fade-right' className='services__image' />
            <div className='services__content' data-aos='fade-up'>
              <div className='section__title section__title--right section__title--short' data-aos='fade-up'>
                <h1 className='title-alt'>
                  Supporting your business with expertise<span>.</span>
                </h1>
              </div>
              {services.map((service) => {
                return (
                  <div className='service' key={service.id}>
                    <div className='service__inner'>
                      <h2 className='caps'>{service.tagline}</h2>
                      <h1 className='title-4'>{service.title}</h1>
                      <div className='service__excerpt mb-8'>{service.excerpt}</div>
                      <Link to={service.slug} className='btn btn--standard'>
                        Learn more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <hr className='hr hr--right' />
      <section className='section'>
        <div className='container'>
          <div className='section__title section__title--left section__title--short' data-aos='fade-up'>
            <h1 className='title-alt'>
              Your business always comes first<span>.</span>
            </h1>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      <hr className='hr hr--left' />

      <section className='section'>
        <div className='container'>
          <div className='section__title section__title--left section__title--short'>
            <h1 className='title-alt'>
              Latest tips from the blog<span>.</span>
            </h1>
          </div>

          <div className='blog__feed'>
            {articles.map((item, i) => {
              return <Post article={item} key={item.id}></Post>;
            })}
          </div>

          <div className='container text-center pt-32'>
            <Link to='/blog' className='btn btn--standard btn--medium'>
              Check out the blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

class HomePage extends React.Component {
  render() {
    const { data } = this.props;
    const services = data.servicesData.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id };
    });

    const testimonials = data.testimonialsData.edges.map((item) => {
      return { ...item.node.frontmatter, id: item.node.id };
    });

    const articles = data.articles.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id, html: item.node.html };
    });

    const projects = data.projects.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id };
    });

    return (
      <Layout>
        <HomePageTemplate services={services} testimonials={testimonials} projects={projects} articles={articles} images={{ collaboration: data.collab, services: data.servicesImage }} />
      </Layout>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    servicesData: allMarkdownRemark(filter: { frontmatter: { type: { eq: "service" } } }, sort: { fields: [frontmatter___position], order: ASC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            position
            tagline
            excerpt
          }
        }
      }
    }
    testimonialsData: allMarkdownRemark(filter: { frontmatter: { type: { eq: "testimonial" } } }) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxWidth: 52) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            role
            company
            testimonial
          }
        }
      }
    }
    projects: allMarkdownRemark(limit: 6, filter: { frontmatter: { type: { eq: "project" } } }) {
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
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            excerpt
            projectcategory
            industry
          }
        }
      }
    }
    articles: allMarkdownRemark(limit: 3, filter: { frontmatter: { type: { eq: "article" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
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
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            excerpt
          }
        }
      }
    }
    collab: file(relativePath: { eq: "collaboration.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    servicesImage: file(relativePath: { eq: "services.png" }) {
      childImageSharp {
        fluid(maxWidth: 850, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
