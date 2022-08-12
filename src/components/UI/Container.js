import classNames from 'classnames';
import React from 'react';

export default function Container({ children, className }) {
  return (
    <div className={classNames('container mx-auto px-5 sm:px-10', className)}>
      {children}
    </div>
  );
}
