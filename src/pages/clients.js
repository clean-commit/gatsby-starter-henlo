import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import SEO from '../helpers/SEOHelper.js';

import Filters from '../components/Filters/Filters';
import Layout from '../components/Layout';
import Project from '../components/Project';

import FiltersData from '../data/FiltersData';

import '../styles/pages/clients.scss';

const title = 'Solving businesses’ problems with code';
const description = 'Check out previous commercial work for clients around the world that ordered quality software services';
const image = '';

export class PortfolioPageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProjectType: [],
      currentIndustry: [],
    };
  }

  handleProjectType(id, isActive) {
    if (isActive) {
      this.setState((prevState) => {
        return {
          currentProjectType: [...prevState.currentProjectType, id],
        };
      });
    } else {
      let index = this.state.currentProjectType.indexOf(id);
      this.setState((prevState) => {
        return {
          currentProjectType: prevState.currentProjectType.filter((_, i) => i !== index),
        };
      });
    }
  }

  handleIndustry(id, isActive) {
    if (isActive) {
      this.setState((prevState) => {
        return {
          currentIndustry: [...prevState.currentIndustry, id],
        };
      });
    } else {
      let index = this.state.currentIndustry.indexOf(id);
      this.setState((prevState) => {
        return {
          currentIndustry: prevState.currentIndustry.filter((_, i) => i !== index),
        };
      });
    }
  }

  render() {
    const projects = this.props.projects
      .filter((item) => {
        if (this.state.currentProjectType.length >= 1) {
          let result = false;
          for (let i = 0; i < item.projectcategory.length; i++) {
            if (this.state.currentProjectType.indexOf(item.projectcategory[i]) !== -1) {
              result = true;
            }
          }
          return result;
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (this.state.currentIndustry.length >= 1) {
          let result = false;
          for (let i = 0; i < item.industry.length; i++) {
            if (this.state.currentIndustry.indexOf(item.industry[i]) !== -1) {
              result = true;
            }
          }
          return result;
        } else {
          return true;
        }
      });

    return (
      <>
        <div className='section pb-64'>
          <div className='container'>
            <div className='section__title section__title--small mb-0'>
              <h1 className='title-1 title-alt'>
                Solutions to <br /> businesses’ problems<span>.</span>
              </h1>
            </div>
          </div>
        </div>
        <hr className='hr hr--right' />
        <section className='section pt-32'>
          <div className='container'>
            <div className='filters__wrapper'>
              <Filters title='Project type' filters={FiltersData.types} key='type' filterChange={this.handleProjectType.bind(this)} />
              <Filters title='Industry' filters={FiltersData.industry} key='industry' filterChange={this.handleIndustry.bind(this)} />
            </div>

            <div className='projects-feed'>
              {projects.length > 0 ? (
                projects.map((item) => {
                  return <Project project={item} key={item.id}></Project>;
                })
              ) : (
                <div className='projects-feed__empty'>
                  <h2 className='title-3'>Wow, no projects match your search :(</h2>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}

class PortfolioPage extends React.Component {
  render() {
    const { data } = this.props;
    const projects = data.projectsData.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id };
    });
    return (
      <Layout>
        <Helmet>
          <meta name='description' content={SEO.description(description)} />
          <meta property='og:title' content={SEO.title(title)} />
          <meta property='og:description' content={SEO.description(description)} />
          <meta property='og:image' content={SEO.image(image)} />
          <title>{SEO.title(title)}</title>
        </Helmet>
        <PortfolioPageTemplate projects={projects} />
      </Layout>
    );
  }
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default PortfolioPage;

export const pageQuery = graphql`
  query ClientsPageQuery {
    projectsData: allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            excerpt
            projectcategory
            industry
          }
        }
      }
    }
  }
`;
