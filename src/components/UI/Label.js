import React from 'react';

export default function Label({ htmlFor, props, children }) {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className='block font-bold mb-2 cursor-pointer text-dark-500 dark:text-white'>
      {children}
    </label>
  );
}
