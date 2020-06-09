import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'gatsby';

const cookies = new Cookies();
const analyticsCookie = 'gatsby-gdpr-google-analytics';
const pixelCookie = 'gatsby-gdpr-facebook-pixel';

export default class CookiesBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
  }
  componentDidMount() {
    if (!(cookies.get(pixelCookie) && cookies.get(analyticsCookie))) {
      this.setState({ isVisible: true });
    }
  }

  handleAccept() {
    cookies.set(pixelCookie, 'true', { path: '/', maxAge: 7776000 });
    cookies.set(analyticsCookie, 'true', { path: '/', maxAge: 7776000 });
    this.setState({ isVisible: false });
  }

  handleDecline() {
    cookies.set(pixelCookie, 'true', { path: '/', maxAge: 259200 });
    cookies.set(analyticsCookie, 'true', { path: '/', maxAge: 259200 });
    this.setState({ isVisible: false });
  }

  render() {
    let cookiesClass = this.state.isVisible ? 'cookies' : 'cookies cookies--hide';
    return (
      <section id='cookiesBar' className={cookiesClass}>
        <div className='cookies__hide' role='button' onClick={this.handleAccept}>
          <svg className='cookies__hide__icon' viewBox='0 0 24 24'>
            <title>Close</title>
            <g strokeWidth='2' fill='none' fillRule='evenodd' strokeLinecap='square'>
              <path d='M5.5 18.5l13-13M18.5 18.5l-13-13'></path>
            </g>
          </svg>
        </div>
        <div className='container'>
          <div className='cookies__content'>
            <p>
              By closing this message or clicking Accept, you consent to our cookies on this device in accordance with the cookie policy (<Link to='/cookies-policy'>available here</Link>).
            </p>
          </div>
          <div className='cookies__choice'>
            <button className='btn btn--standard mr-16' onClick={this.handleAccept}>
              Accept
            </button>
            <button className='btn-decline' onClick={this.handleDecline}>
              Decline
            </button>
          </div>
        </div>
      </section>
    );
  }
}
