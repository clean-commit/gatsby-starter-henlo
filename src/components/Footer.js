import React from 'react';

export default function Footer() {
  return (
    <footer className='mt-auto py-5 bottom-0 w-full dark:bg-black bg-white dark:text-white text-black'>
      <div className='container text-center mx-auto'>
        <a
          href='https://cleancommit.io?utm_source=HenloGatsby&utm_medium=referral'
          className='text-center text-sm font-regular text-gray-400 hover:text-gray-500 transition-colors'>
          Created by cleancommit.io
        </a>
      </div>
    </footer>
  );
}
