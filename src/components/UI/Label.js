import React from 'react';

export default function Label({ htmlFor, props, children }) {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className='text-dark-500 mb-2 block cursor-pointer font-bold dark:text-white'>
      {children}
    </label>
  );
}
