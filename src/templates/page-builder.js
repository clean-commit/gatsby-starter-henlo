import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '@/components/Layout';
import PageBuilder from '@/components/PageBuilder';

import SEO from '@/components/SEO/Seo';

const Page = ({ data }) => {
  console.log(data);
  return (
    <Layout nav={true}>
      <SEO data={data.page.frontmatter.seo}>
        <meta property='og:type' content='website' />
      </SEO>
      <PageBuilder blocks={data.page.frontmatter.blocks} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default Page;

export const basicPageQuery = graphql`
  query BasicPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      frontmatter {
        id
        title
        ...Blocks
        ...SEO
      }
    }
  }
`;
