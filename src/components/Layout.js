import React from 'react';

import DefaultSeo from '@/components/SEO/DefaultSeo';
import Footer from '@/components/Footer';
// import Header from '@/components/Header'

const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <DefaultSeo />
      <div className='h-screen'>
        <Header />
        <main className='wrapper'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default TemplateWrapper;
