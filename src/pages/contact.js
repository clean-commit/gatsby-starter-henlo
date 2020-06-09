import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from '../helpers/SEOHelper.js';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Form from '../components/Forms/Contact';
import Testimonial from '../components/Testimonial';
import Availability from '../components/Availability';
import ChatButton from '../components/ChatButton';
import Together from '../components/Together';

import '../styles/pages/contact.scss';

const title = 'Get in touch today!';
const description = "No time to waste, let's get a head start on your project. Let me know what I can help you with and we'll schedule a call to talk about your needs and ideas.";
const image = '';

export const ContactPageTemplate = ({ testimonials }) => {
  return (
    <>
      <section className='section section--large pb-64'>
        <div className='container'>
          <div className='section__title section__title--center text-center'>
            <h1 className='title-alt'>
              Let's talk today<span>.</span>
            </h1>
            <div className='text-lg mb-16'>No time to waste, let's get a head start on your project. Let me know what I can help you with and we'll schedule a call to talk about your needs and ideas.</div>
            <Availability />
          </div>
        </div>
      </section>
      <hr className='hr hr--left' />
      <section className='section'>
        <div className='container'>
          <div className='contact-form'>
            <Form formTitle='Contact'></Form>
          </div>
          <div className='text-lg text-center mt-32'>
            If you prefer to talk in real-time reach out via Facebook!
            <div className='mt-16 text-center'>
              <ChatButton />
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
          <div className='testimonials'>
            {testimonials.map((item) => {
              return <Testimonial item={item} key={item.id} />;
            })}
          </div>
        </div>
      </section>

      <hr className='hr hr--left' />

      <Together />
    </>
  );
};

class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    const testimonials = data.testimonials.edges.map((item) => {
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
        <ContactPageTemplate testimonials={testimonials} />
      </Layout>
    );
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ContactPage;

export const pageQuery = graphql`
  query ContactPageQuery {
    testimonials: allMarkdownRemark(limit: 3, filter: { frontmatter: { type: { eq: "testimonial" } } }) {
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
  }
`;
