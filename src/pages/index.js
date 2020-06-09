import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';

import '../styles/pages/front-page.scss';

function scroll() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}
export const HomePageTemplate = ({ services, testimonials, projects, articles, images }) => {
  return (
    <>
      <section className='hero'>
        <div className='hero__wrapper'></div>
      </section>

      <hr className='hr hr--left' />

      <hr className='hr hr--right' />
      <section className='section'>
        <div className='container'>
          <div className='section__title section__title--left section__title--short' data-aos='fade-up'>
            <h1 className='title-alt'>
              Your business always comes first<span>.</span>
            </h1>
          </div>
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

          <div className='blog__feed'></div>

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

    return (
      <Layout>
        <HomePageTemplate />
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
