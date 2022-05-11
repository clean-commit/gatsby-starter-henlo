import React from 'react';

import DefaultSeo from '@/components/SEO/DefaultSeo';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Layout = ({ nav = false, children }) => {
  console.log(nav);
  return (
    <div>
      <DefaultSeo />
      <div className='min-h-screen flex flex-col dark:bg-black bg-white '>
        {nav && <Header />}
        <main className='wrapper'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
