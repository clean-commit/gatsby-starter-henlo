import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

import Seo from '@/components/SEO/Seo';
import Layout from '@/components/Layout';

import Logo from '@/icons/Logo';

const HomePageTemplate = ({ data }) => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center dark:bg-zinc-900'>
        <div className='container px-5 sm:px-10'>
          <section className='w-full py-20 px-5 rounded-lg shadow border-grey-lighter dark:border-zinc-600 border'>
            <div className='text-center mx-auto'>
              <div>
                <Logo className='mx-auto h-8 w-auto dark:text-white' />
              </div>
              <p className='text-xs mt-2 text-black dark:text-white'>
                {data.version}
              </p>
            </div>
            <ReactMarkdown
              children={data.description}
              className='text-center mt-6 dark:text-white'
              allowDangerousHtml
            />
            {data.links.length > 0 ? (
              <div className='flex justify-center flex-wrap items-center mt-6'>
                {data.links.map(({ link }, i) => {
                  return (
                    <a
                      href={link.url}
                      key={i}
                      target='_blank'
                      rel='noreferrer'
                      className='text-sm m-2 dark:text-white'>
                      {link.content}
                    </a>
                  );
                })}
              </div>
            ) : (
              ''
            )}
          </section>
        </div>
      </div>
    </>
  );
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <Seo data={frontmatter.seo} />
      <HomePageTemplate data={frontmatter} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        version
        description
        links {
          link {
            content
            url
          }
        }
        ...SEO
      }
    }
  }
`;

export default HomePage;
