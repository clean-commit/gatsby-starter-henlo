import React, { Component } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Together() {
  const data = useStaticQuery(graphql`
    query {
      working: file(relativePath: { eq: "working-on-android-app.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 607, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      design: file(relativePath: { eq: "designing-ui.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ecommerce: file(relativePath: { eq: "e-commerce-website.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 70) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <section className='section'>
      <div className='container'>
        <div className='section__title section__title--center'>
          <h1 className='text-center title-2 title-alt'>
            Let's build your <br /> next project together<span>.</span>
          </h1>
        </div>
        <div className='cols-50'>
          <div className='col-50'>
            <div className='image-grid'>
              <Img fluid={data.working.childImageSharp.fluid} className='image-grid-item image-grid-item--wide' alt='Working on android app'></Img>
              <Img fluid={data.design.childImageSharp.fluid} className='image-grid-item image-grid-item--small' alt='Designing UI handwritten notes'></Img>
              <Img fluid={data.ecommerce.childImageSharp.fluid} className='image-grid-item image-grid-item--small' alt='Testing e-commerce app'></Img>
            </div>
          </div>
          <div className='col-50'>
            <div className='perks'>
              <div className='perk'>
                <h2 className='title-5 perk__title'>International experience</h2>
                <div className='perk__content'>Working with multiple businesses and business owners around Europe, Australia and America tought me a lot about software role in an organization. Let me share my experience with you.</div>
              </div>
              <div className='perk'>
                <h2 className='title-5 perk__title'>Elastic aproach</h2>
                <div className='perk__content'>I'm available when you need me for long-term support and single projects and always open to long-term collaboration.</div>
              </div>
              <div className='perk'>
                <h2 className='title-5 perk__title'>Dynamic team when you need it</h2>
                <div className='perk__content'>Connection to other talented freelancers enables me to take on much bigger projects then most other devs. Let me handle the whole process for you.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
