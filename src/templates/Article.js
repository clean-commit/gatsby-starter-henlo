import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Disqus } from 'gatsby-plugin-disqus';
import { location } from '@reach/router';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import CTA from '../components/CTA';
import SEO from '../helpers/SEOHelper.js';
import Posts from '../helpers/PostHelper';

import '../styles/pages/article.scss';

export const ArticleTemplate = ({ article, author }) => {
  let disqusConfig = {
    url: `https://mrkaluzny.com${article.slug}`,
    identifier: article.id,
    title: article.title,
  };

  return (
    <>
      <section className='article'>
        <header className='article__header'>
          {article.thumbnail && <Img fluid={article.thumbnail.childImageSharp.fluid} alt={article.title} className='article__image' />}
          <div className='container'>
            <div className='article__title text-center mb-32'>
              {article.category && <h2 className='title-uppercase'>{article.category}</h2>}
              <h1 className='title-1 title-alt'>{article.title}</h1>

              <div className='author author--article'>
                <Img fluid={author.image.childImageSharp.fluid} className='author__photo' alt={author.title} />
                <div className='author__info'>
                  <div className='author__details'>
                    <span className='author__name'>{author.title}</span>
                    <div className='author__publication'>
                      <time className='author__published'>{article.date}</time>
                      <div className='author__break'></div>
                      <span>{Posts.calculateReadingTime(article.html)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className='article__body' dangerouslySetInnerHTML={{ __html: article.html }}></div>
        </div>
        <section className='article__comments'>
          <div className='container'>
            <Disqus config={disqusConfig} />
          </div>
        </section>
      </section>

      <CTA />
    </>
  );
};

class ArticlePage extends React.Component {
  render() {
    const { data } = this.props;
    const article = data.article.frontmatter;
    const slug = data.article.fields.slug;
    const author = data.authors.edges.filter((item) => item.node.frontmatter.title === article.author);
    const html = data.article.html;
    return (
      <Layout>
        <Helmet>
          <meta name='description' content={SEO.description(article.seo.seodescription)} />
          <meta property='og:title' content={SEO.title(article.seo.seotitle ? article.seo.seotitle : article.title)} />
          <meta property='og:description' content={SEO.description(article.seo.seodescription)} />
          <title>{SEO.title(article.seo.seotitle ? article.seo.seotitle : article.title)}</title>
          <meta property='og:image' content={SEO.image(article.seo.seoimage ? article.seo.seoimage : article.thumbnail)} />
        </Helmet>
        <ArticleTemplate article={{ ...article, html, slug }} author={{ ...author[0].node.frontmatter, id: author[0].node.id }} />
      </Layout>
    );
  }
}

export default ArticlePage;

export const articlePageQuery = graphql`
  query ArticlePage($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        author
        date(formatString: "MMM D, YYYY")
        author
        category
        seo {
          seodescription
          seotitle
          seoimage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    authors: allMarkdownRemark(filter: { frontmatter: { type: { eq: "author" } } }) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxWidth: 60) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            description
          }
        }
      }
    }
  }
`;
