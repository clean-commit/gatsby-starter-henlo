import React from 'react';
import Link from '../../resolvers/Link';
import classNames from 'classnames';

export default function Button({ className, button, children, ...props }) {
  let decoration = false;
  let buttonStyle =
    'group inline-block font-bold text-dark-500 dark:text-white';
  switch (button?.variant) {
    case 'arrow':
      decoration = 'arrow';
      buttonStyle = `${buttonStyle} `;
      break;
    case 'button':
      buttonStyle = `${buttonStyle} border-dark-500 border dark:border-white bg-dark-500 dark:bg-white text-white dark:text-black py-2 px-6 text-center dark:hover:bg-transparent hover:bg-transparent hover:text-dark-500 dark:hover:text-white transition-colors`;
      break;
    case 'outlined':
      buttonStyle = `${buttonStyle} border-dark-500 border dark:border-white py-2 px-6 text-center dark:hover:bg-white hover:bg-dark-500 hover:text-white dark:hover:text-black transition-colors`;
      break;
    case 'dot':
      decoration = 'dot';
      buttonStyle = `${buttonStyle} `;
      break;
    default:
      buttonStyle = `${buttonStyle} link dark:link-dark`;
  }

  return (
    <>
      {button?.url ? (
        <Link
          to={button?.url}
          className={classNames(buttonStyle, className)}
          {...props}>
          {children}
        </Link>
      ) : (
        <button className={classNames(buttonStyle, className)} {...props}>
          {children}
        </button>
      )}
    </>
  );
}
