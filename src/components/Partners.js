import React, { Component } from 'react';
import 'styles/components/Partners.scss';

export default class Partners extends Component {
  render() {
    return (
      <section className='partners'>
        <div className='container'>
          <h1 className='title-uppercase'>Trusted Partners</h1>
          <div className='partners__wrapper'>
            <div className='partners__info'>Using top-notch software is a foundation of a successful project!</div>
            <div className='partners__items'>
              <div className='partner__wrapper'>
                <img src='/img/digital-ocean.svg' alt='Digital Ocean' className='partner' />
              </div>
              <div className='partner__wrapper'>
                <img src='/img/slack.svg' alt='Slack' className='partner' />
              </div>
              <div className='partner__wrapper'>
                <img src='/img/gitlab.svg' alt='Gitlab' className='partner' />
              </div>
              <div className='partner__wrapper'>
                <img src='/img/netlify.svg' alt='Netlify' className='partner' />
              </div>
              <div className='partner__wrapper'>
                <img src='/img/stripe.svg' alt='Stripe' className='partner' />
              </div>
              <div className='partner__wrapper'>
                <img src='/img/todoist.svg' alt='Todoist' className='partner partner--alt' />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
