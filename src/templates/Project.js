import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import CTA from '../components/CTA';
import SEO from '../helpers/SEOHelper.js';

import '../styles/pages/project.scss';

export const ProjectTemplate = ({ project }) => {
  const types = project.projectcategory.map((cat, i) => {
    return (
      <span className='project__type' key={i}>
        {cat}
      </span>
    );
  });

  return (
    <>
      <section className='section section--large project__header__wrapper'>
        <div className='container'>
          <header className='project__header'>
            <div className='project__header__content'>
              <div className='project__types'>{types}</div>
              <h1 className='title-2'>{project.title}</h1>
              <p className='text-lg'>{project.excerpt}</p>
            </div>
            <Img fluid={project.shot.childImageSharp.fluid} alt={project.title} className='project__header__image' />
          </header>
        </div>
      </section>

      <section className='section'>
        <div className='container'>
          <div className='cols'>
            <div className='cols__left'>
              <h1 className='title-3'>{project.top.title}</h1>
            </div>
            <div className='cols__right'>
              <ReactMarkdown source={project.top.topcontent} />
            </div>
          </div>
        </div>
      </section>

      <hr className='hr hr--left' />

      <Img fluid={project.first_image.childImageSharp.fluid} alt='' className='project__image' />

      {project.bottom.content && (
        <section className='section'>
          <div className='container'>
            <div className='cols'>
              <div className='cols__left'>
                <ReactMarkdown source={project.bottom.content} />
              </div>
              {project.workload.length > 0 && (
                <div className='cols__right'>
                  <h2 className='title-uppercase'>Scope of work</h2>
                  <ul className='tasks'>
                    {project.workload.map((item) => {
                      return (
                        <li className='tasks__item'>
                          <span>{item.item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {project.second_image && <Img fluid={project.second_image.childImageSharp.fluid} alt='' className='project__image' />}

      <CTA />
    </>
  );
};

class ProjectPage extends React.Component {
  render() {
    const { data } = this.props;
    const project = data.project.frontmatter;
    return (
      <Layout>
        <Helmet>
          <meta name='description' content={SEO.description(project.seo.seodescription)} />
          <meta property='og:title' content={SEO.title(project.seo.seotitle ? project.seo.seotitle : project.title)} />
          <meta property='og:description' content={SEO.description(project.seo.seodescription)} />
          <meta property='og:image' content={SEO.image(project.seo.seoimage ? project.seo.seoimage : project.image)} />
          <title>{SEO.title(project.seo.seotitle ? project.seo.seotitle : project.title)}</title>
        </Helmet>
        <ProjectTemplate project={{ ...project }} />
      </Layout>
    );
  }
}

export default ProjectPage;

export const projectPageQuery = graphql`
  query ProjectPage($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        excerpt
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        shot {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        company
        projectcategory
        industry
        top {
          title
          topcontent
        }
        bottom {
          content
        }
        first_image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        second_image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        workload {
          item
        }
        testimonial
        seo {
          seodescription
          seotitle
          seoimage {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
