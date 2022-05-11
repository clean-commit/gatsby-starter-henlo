import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';

import SEO from '@/components/SEO/Seo';

const Post = ({ data }) => {
  console.log(data);
  return (
    <Layout nav={true}>
      <SEO data={data.post.frontmatter.seo} />

      <section className='container mx-auto px-4 py-24'>
        <h1 className='max-w-3xl mx-auto font-bold text-6xl my-12 dark:text-white'>
          {data.post.frontmatter.title}
        </h1>
        <div
          className='prose prose-lg dark:prose-invert mx-auto max-w-3xl'
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
