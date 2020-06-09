import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../helpers/SEOHelper.js';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Partners from '../components/Partners';
import Together from '../components/Together';
import TestimonialSlider from '../components/TestimonialSlider';
import ChatButton from '../components/ChatButton';

import '../styles/pages/front-page.scss';

const title = 'About Wojciech Kałużny';
const description = "My name is Wojciech Kałużny. I'm a techie since I can remember. Back in 2018 I've decided it was time to share my skills with entreprenuers around the world.";
const image = '/img/about-me-seo.jpg';

export const AboutPageTemplate = ({ testimonials, heroImage }) => {
  return (
    <>
      <section className='hero'>
        <div className='hero__wrapper hero__wrapper--about'>
          <Img fluid={heroImage.childImageSharp.fluid} alt='Wojciech Kałużny Developer' className='hero__image hero__image--about' data-aos='fade-left'></Img>
          <div className='hero__content hero__content--about' data-aos='fade-up'>
            <div className='hero__content__inner hero__content__inner--about'>
              <h1 className='title-alt'>
                Hello there! My name is Wojciech Kałużny<span>.</span>
              </h1>
              <p className='text-lg'>
                I'm a techie since I can remember. Back in 2018, I've decided it was time to share my skills with entrepreneurs around the world. Working with my clients I focus on perfecting their online presence and improving the user experience for their
                customers.
              </p>
              <p className='text-lg'>
                I focus on crafting websites and web applications, occasionally working on mobile as well. I'm treating every client like a partner. Always complying with the highest standards and finding solutions that suit your needs. If you hesitate about
                your software issues, don't wait - let's talk!
              </p>
              <div className='mt-16'>
                <ChatButton />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='hr hr--right' />
      <Partners />
      <section className='section'>
        <div className='container'>
          <div className='cols'>
            <div className='cols__left'>
              <h1 className='title-3'>A bit more about how I started and what drives me to improve my skills</h1>
            </div>
            <div className='cols__right'>
              <p className='text-lg'>
                I got my first computer back in 1999 when internet connection wasn't widely available in Poland. At first, I wanted to create games, mostly from a creative perspective but that idea kind of died out. I wrote my first line of code when I was 9
                years old.
              </p>
              <p className='text-lg'>
                From that time I always wanted to learn how to code apps. One day after I came back from my University I felt like I needed to learn something besides economics. That's when I casually started to play around with codecademy. I was hooked! Fast
                forward couple of years - I'm a full-fledged dev :)
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className='hr hr--left' />

      <Together />

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
    </>
  );
};

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;

    const testimonials = data.testimonialsData.edges.map((item) => {
      return { ...item.node.frontmatter, id: item.node.id };
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
        <AboutPageTemplate testimonials={testimonials} heroImage={data.image} />
      </Layout>
    );
  }
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    testimonialsData: allMarkdownRemark(limit: 6, filter: { frontmatter: { type: { eq: "testimonial" } } }) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                  ...GatsbyImageSharpFluid
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
    image: file(relativePath: { eq: "wojciech-kaluzny.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900, quality: 95) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
