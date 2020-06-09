import React, { Component } from 'react';
import classNames from 'classnames'

export default class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      filter: this.props.data,
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.setState( (prevState, current) => {
      return {isActive: !prevState.isActive}
    }, () => {
      this.props.filterChange(this.state.filter, this.state.isActive)
    })
  }

  render() {
    const filter = this.state.filter
    var filterClasses = classNames({
      'filter': true,
      'filter--active': this.state.isActive,
    });

    return (
      <div className={filterClasses} onClick={this.handleClick}>
        <div className="filter__name" dangerouslySetInnerHTML={{__html: filter}}></div>
        <div className="filter__check">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </div>
    )
  }
}
