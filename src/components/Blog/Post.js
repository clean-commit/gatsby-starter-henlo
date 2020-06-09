import React, { Component } from 'react';
import { Link } from 'gatsby';
import Helper from '../../helpers/PostHelper';
import Author from './Author';
import Img from 'gatsby-image';

export default class Post extends Component {
  render() {
    return (
      <article className='Post'>
        <Link to={this.props.article.slug} className='Post__image'>
          <Img fluid={this.props.article.thumbnail.childImageSharp.fluid} alt={this.props.article.title} />
        </Link>
        <div className='Post__content'>
          <div className='Post__content__header'>
            <time className='post-date caps'>{this.props.article.date}</time>
            {this.props.article.category && <div className='post-category caps caps--bold'>{this.props.article.category}</div>}
          </div>
          <Link to={this.props.article.slug} className='Post__title'>
            <h1 className='title-4'>{this.props.article.title}</h1>
          </Link>
          <Author author={this.props.article.author} readtime={Helper.calculateReadingTime(this.props.article.html)} />
          <div className='Post__excerpt'>{this.props.article.excerpt}</div>
          <Link to={this.props.article.slug} className='btn btn-underlined'>
            Read more
          </Link>
        </div>
      </article>
    );
  }
}
