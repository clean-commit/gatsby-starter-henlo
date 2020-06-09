import React, { Component } from 'react';

import Filter from './Filter'

export default class Filters extends Component {
  render() {

    const filters = this.props.filters ?
      this.props.filters.map((filter, i) => {
        return (
          <Filter key={i} data={filter} filterChange={this.props.filterChange} />
        )
      })
      : '' ;

    return (
      <div className="filters">
        <div className="filters__title title-5">{this.props.title}</div>
        <div className="filters__items">
          { filters }
        </div>
      </div>
    )
  }
}
