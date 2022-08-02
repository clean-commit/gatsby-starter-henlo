import React from 'react';
import Link from '../resolvers/Link';
import ArrowUpRight from '../Icons/ArrowUpRight';
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
          <ButtonChild decoration={decoration}>{children}</ButtonChild>
        </Link>
      ) : (
        <button className={classNames(buttonStyle, className)} {...props}>
          <ButtonChild decoration={decoration}>{children}</ButtonChild>
        </button>
      )}
    </>
  );
}

function ButtonChild({ decoration, children }) {
  const renderContent = (decoration, children) => {
    switch (decoration) {
      case 'dot':
        return (
          <div className='flex items-center gap-2'>
            <div className='flex-shrink-0'>
              <div className='group-hover:scale-150 scale-95 duration-300 transition-all w-2 h-2 bg-green-500 rounded-full ease-in-out'></div>
            </div>
            {children}
          </div>
        );
      case 'arrow':
        return (
          <div className='flex items-center gap-2'>
            {children}{' '}
            <ArrowUpRight className='text-green-500 group-hover:rotate-45 transition-transform' />
          </div>
        );
      default:
        return children;
    }
  };
  return <>{renderContent(decoration, children)}</>;
}
