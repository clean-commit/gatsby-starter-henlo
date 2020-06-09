import React, { Component } from 'react';
import 'styles/components/Testimonial.scss';
import quote from 'img/quote.svg';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

export default class TestimonialCard extends Component {
  render() {
    let image = this.props.item.image ? this.props.item.image : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';
    return (
      <article className='TestimonialCard'>
        <img src={quote} alt='' className='TestimonialCard__quote' />
        <ReactMarkdown source={this.props.item.testimonial}></ReactMarkdown>
        <div className='TestimonialCard__client client'>
          <Img fluid={image.childImageSharp.fluid} alt={this.props.item.title} className='client__image' />
          <div className='client__details'>
            <h2 className='client__name title-6'>{this.props.item.title}</h2>
            <div className='client__role text-sm'> {this.props.item.company}</div>
          </div>
        </div>
      </article>
    );
  }
}
