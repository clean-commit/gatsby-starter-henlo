import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import React from 'react';

export class UuidControl extends React.Component {
  render() {
    const { forID, value, onChange, classNameWrapper } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        <input
          type='hidden'
          id={forID}
          className={classNameWrapper}
          value={value || v4()}
          onChange={(e) => onChange(e.target.value.trim())}
        />
        <div>{value || v4()}</div>
        <button
          onClick={() => {
            onChange(v4());
          }}
          style={{ marginLeft: '1em' }}>
          Regenerate ID
        </button>
      </div>
    );
  }
}

UuidControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
};

UuidControl.defaultProps = {
  value: '',
};

export function UuidPreview({ value }) {
  return <div>{value}</div>;
}

UuidPreview.propTypes = {
  value: PropTypes.node,
};
