import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Testimonial from '../components/Testimonial';
import Project from '../components/Project';
import CTA from '../components/CTA';
import SEO from '../helpers/SEOHelper.js';

import ServiceForm from '../components/Forms/ServiceForm';
import Together from '../components/Together';

import '../styles/pages/service.scss';

export const ServiceTemplate = ({ service, testimonials, projects }) => {
  let testimonialsToShow = [];
  let projectsToShow = [];

  if (typeof service.testimonials == 'object') {
    testimonialsToShow = testimonials.filter((item) => {
      return service.testimonials.indexOf(item.title) > -1;
    });
  }

  if (typeof service.projects == 'object') {
    projectsToShow = projects.filter((item) => {
      return service.projects.indexOf(item.title) > -1;
    });
  }

  return (
    <>
      <section className='section section--dots'>
        <div className='container'>
          <div className='service-hero'>
            <div className='service-hero__content'>
              <h1 className='title-alt mb-32'>
                {service.herotitle}
                <span>.</span>
              </h1>
              <p className='text-lg'>{service.herosubtitle}</p>
              <ServiceForm formClass='footer-form field field-grouped' formTitle={service.title}></ServiceForm>
              <p className='text-sm'>
                I'm committed to processing the above information in order to contact you and talk about your project. Other information is used for statistical purposes only. Learn more about <Link to='/privacy-policy'>Privacy Policy</Link>.
              </p>
            </div>
            <Img fluid={service.thumbnail.childImageSharp.fluid} alt={service.seo.seotitle} className='service-hero__image' />
          </div>
        </div>
      </section>

      <hr className='hr hr--left' />

      <section className='section'>
        <div className='container'>
          <div className='cols'>
            <div className='cols__left'>
              <h1 className='title-3'>{service.subtitle}</h1>
            </div>
            <div className='cols__right' dangerouslySetInnerHTML={{ __html: service.html }}></div>
          </div>
        </div>
      </section>

      <hr className='hr hr--right' />

      <Together />

      <section className='section'>
        <div className='container'>
          <div className='testimonials'>
            {testimonialsToShow.map((item) => {
              return <Testimonial item={item} key={item.id}></Testimonial>;
            })}
          </div>
        </div>
      </section>

      <hr className='hr hr--left' />

      <section className='section'>
        <div className='container'>
          <div className='cols'>
            <div className='cols__left'>
              <h1 className='title-2 title-alt'>
                Knowladge gained from experience<span>.</span>
              </h1>
              <div className='line mt-24'></div>
            </div>
            <div className='cols__right'>
              <ReactMarkdown source={service.projectsdescription} />
            </div>
          </div>
          <div className='projects-feed'>
            {projectsToShow.slice(0, 4).map((item) => {
              return <Project inverted={true} project={item} key={item.id}></Project>;
            })}
          </div>
          <div className='text-center mt-16'>
            <Link to='/clients' className='btn btn--standard'>
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
};

class ServicePage extends React.Component {
  render() {
    const { data } = this.props;
    const service = data.service.frontmatter;
    const html = data.service.html;
    const testimonials = data.testimonials.edges.map((item) => {
      return { ...item.node.frontmatter, id: item.node.id };
    });
    const projects = data.projects.edges.map((item) => {
      return { ...item.node.frontmatter, slug: item.node.fields.slug, id: item.node.id };
    });
    return (
      <Layout>
        <Helmet>
          <meta name='description' content={SEO.description(service.seo.seodescription)} />
          <meta property='og:title' content={SEO.title(service.seo.seotitle ? service.seo.seotitle : service.title)} />
          <meta property='og:description' content={SEO.description(service.seo.seodescription)} />
          <meta property='og:image' content={SEO.image(service.seo.seoimage)} />
          <title>{SEO.title(service.seo.seotitle ? service.seo.seotitle : service.title)}</title>
        </Helmet>
        <ServiceTemplate service={{ ...service, html }} testimonials={testimonials} projects={projects} />
      </Layout>
    );
  }
}

export default ServicePage;

export const servicePageQuery = graphql`
  query ServicePage($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        herotitle
        thumbnail {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        herosubtitle
        subtitle
        projectsdescription
        projects
        testimonials
        seo {
          seodescription
          seotitle
          seoimage {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    testimonials: allMarkdownRemark(filter: { frontmatter: { type: { eq: "testimonial" } } }) {
      edges {
        node {
          id
          frontmatter {
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            role
            company
            testimonial
          }
        }
      }
    }
    projects: allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                # Specify the image processing specifications right in the query.
                fluid(maxWidth: 660) {
                  ...GatsbyImageSharpFluid_withWebp
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
