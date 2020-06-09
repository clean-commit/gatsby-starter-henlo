import React, {Component} from 'react'
import { Link } from "gatsby"
import 'styles/components/CTA.scss';

export default class CallToAction extends Component {
  render() {
    return(
      <section className="section">
        <div className="container">
          <div className="cta">
            <div className="cta__title title-2">Contact me today! <br/> Let's work on your project</div>
            <div className="cta__text">
              <p className="text-lg">There's no point in wasting time, let's talk about your project today. I'm certain I'll be able to help you enable your website to get more leads.</p>
              <Link to="/contact" className="btn btn--standard btn--green btn--large">Take me to contact!</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
