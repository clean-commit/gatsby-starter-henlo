import React from 'react';
import Info from '../data/AvailabilityData'

export default class Availability extends React.Component {

  render() {

    let boxClass = `availability__status availability__status--${Info.status}`
    let componentClass =  this.props.white ? 'availability availability--white' : 'availability'

    return (
      <div className="availability__wrapper">
        <div className={componentClass}>
          <div className="availability__title caps">Current Availability</div>
          <div className="availability__spacer"></div>
          <div className={boxClass}><span></span> { Info.content }</div>
        </div>
      </div>
    );
  }
}
