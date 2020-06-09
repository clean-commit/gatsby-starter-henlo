import React from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'
import ChatButton from './ChatButton'

import Availability from './Availability';



const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__top">
          <div className="section__title section__title--center text-center mb-16">
              <h1 className="title-3  mb-0 text-white">Take your website to next level today!</h1>
          </div>
          <Availability white />
          <div className="footer__hello">
            <div className="text-md text-white mb-16">
 If you'd like to talk about a project you want help with or need an advice about development or product design, just drop me a message
            </div>
            <Link to='/contact' className='btn btn--outline btn--green'>Fill out the contact form</Link>
              <div className="text-md text-white text-center mt-32">
                You can also talk to me directly in real time
                <div className="mt-16 text-center">
                  <ChatButton white={true} />
                </div>
              </div>
          </div>
        </div>
        <div className="footer__break">
        </div>
        <div className="container">
          <div className="footer__bottom">
            <ul className="footer__social">
              <li>
                <a href="https://facebook.com/mrkaluznys" className="footer__link" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src='/img/social/facebook.svg' />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/mrkaluzny" className="footer__link" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src='/img/social/instagram.svg' />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mrkaluzny" className="footer__link" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src='/img/social/linkedin.svg' />
                </a>
              </li>
              <li>
                <a href="https://github.com/mrkaluzny" className="footer__link" target="_blank" rel="noopener noreferrer">
                  <ReactSVG src='/img/social/github.svg' />
                </a>
              </li>
            </ul>
            <div className="footer__copyright footer__links">
              <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/cookies-policy">Cookies Policy</Link> | <Link to="/about">About</Link>
            </div>
            <div className="footer__copyright">© 2015 - {new Date().getFullYear()} Wojciech Kałużny All Rights Reserved</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
