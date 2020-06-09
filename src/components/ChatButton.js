import React from 'react';
import ReactSVG from 'react-svg';

export default class ChatButton extends React.Component {
  render() {
    let boxClass = this.props.white ? 'btn btn--outline btn--white btn--icon' : 'btn btn--outline btn--dark btn--icon';
    return (
      <a href='http://m.me/mrkaluznys' target='_blank' rel='noreferrer' className={boxClass}>
        Let's chat
        <ReactSVG src='/img/social/message-circle.svg' />
      </a>
    );
  }
}
