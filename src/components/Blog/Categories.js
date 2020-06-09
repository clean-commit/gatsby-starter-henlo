import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

class Categories extends Component {
  render() {
    return (
      <div className='categories'>
        <div className='container'>
          <div className='categories__content'>
            <Link to='/blog' className={`category-item ${this.props.currentpath === '/blog' ? 'category-item--active' : ''}`}>
              All
            </Link>
            {this.props.categories.map((item, i) => {
              return (
                <Link to={item.slug} key={i} className={`category-item ${this.props.currentpath === item.slug ? 'category-item--active' : ''}`}>
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  currentpath: PropTypes.string.isRequired,
};

export default Categories;
