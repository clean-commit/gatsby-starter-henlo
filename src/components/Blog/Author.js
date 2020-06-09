import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Author extends Component {
  render() {
    const author = this.props.author;
    const readtime = this.props.readtime;

    return (
      <div className='author author--recent'>
        <span className='author__name'>{author}</span> | <span className='author__time'>{readtime}</span>
      </div>
    );
  }
}

Author.propTypes = {
  author: PropTypes.string.isRequired,
  readtime: PropTypes.string.isRequired,
};

export default Author;
