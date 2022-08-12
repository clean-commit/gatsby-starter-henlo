import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';

import SEO from '@/components/SEO/Seo';

const Post = ({ data }) => {
  return (
    <Layout nav={true}>
      <SEO data={data.post.frontmatter.seo}>
        <meta property='og:type' content='article' />
      </SEO>

      <section className='container mx-auto px-4 py-24'>
        <h1 className='mx-auto my-12 max-w-3xl text-6xl font-bold dark:text-white'>
          {data.post.frontmatter.title}
        </h1>
        <div
          className='prose prose-lg mx-auto max-w-3xl dark:prose-invert'
          dangerouslySetInnerHTML={{ __html: data?.post.html }}></div>
      </section>
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Post;

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        author
        ...SEO
      }
    }
  }
`;
