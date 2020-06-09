import React from 'react';
import Layout from '../components/Layout';
import '../styles/pages/404.scss';

const NotFoundPage = () => (
  <Layout>
    <section className='section section--large'>
      <hr className='hr hr--right mb-32' />
      <div className='container'>
        <img src='/img/404.svg' className='illustration-404' />
        <div className='section__title section__title--center text-center'>
          <h1 className='title-alt'>
            NOT FOUND<span>.</span>
          </h1>
          <h5>You just hit a route that doesn&#39;t exist... the sadness.</h5>
          <a href='/' className='btn btn--standard mt-16'>
            Go to home page!
          </a>
        </div>
      </div>
    </section>
    <hr className='hr hr--left' />
  </Layout>
);

export default NotFoundPage;
