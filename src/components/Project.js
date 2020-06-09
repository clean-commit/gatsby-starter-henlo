import React, { Component } from 'react';
import 'styles/components/Project.scss';
import Img from 'gatsby-image';

export default class Project extends Component {
  render() {
    const types = this.props.project.projectcategory.map((cat, i) => {
      return (
        <span className='Project__type' key={i}>
          {cat}
        </span>
      );
    });

    return (
      <article className='Project' key={this.props.project.id} data-aos='fade-up'>
        <a href={this.props.project.slug} className='Project__wrapper'>
          <Img fluid={this.props.project.image.childImageSharp.fluid} alt={this.props.project.title} className='Project__image' />
          <div className='Project__info'>
            <div className='Project__info__owner'>
              <div className='Project__info__types'>{types}</div>
              <h1 className='Project__info__company title-3 text-white'>{this.props.project.title}</h1>
            </div>
            <div className='Project__info__content'>{this.props.project.excerpt}</div>
          </div>
        </a>
      </article>
    );
  }
}
