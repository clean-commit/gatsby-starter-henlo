import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import GitHubButton from 'react-github-btn'

export const HomePageTemplate = ({ data }) => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div className="container px-5 sm:px-10">
          <section className="w-full bg-teal-100 py-20 px-5 rounded-lg shadow border-grey-lighter border">
            <div className='text-center mx-auto'>
              <ReactSVG src="/img/logo.svg" className="logo"></ReactSVG>
            </div>
            <div className="text-center mt-6">
              <span className="mr-3">
                <GitHubButton href="https://github.com/clean-commit/gatsby-starter" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-show-count="true" data-icon="octicon-star" aria-label="Star clean-commit/gatsby-starter on GitHub">Star</GitHubButton>
              </span>
              <span>
                <GitHubButton href="https://github.com/clean-commit/gatsby-starter/archive/master.zip" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-download" aria-label="Download clean-commit/gatsby-starter on GitHub">Download</GitHubButton>
              </span>
            </div>


            {data.links.length > 0 ? <div className="links">
              {
                data.links.map(({ link: link }, i) => {
                  return <a href={link.url} key={i} target="_blank" className="links__item">{link.content}</a>
                })
              }
            </div> : ''}
          </section>
        </div>
      </div>
    </>
  )
}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (

    <Layout hideNav={true}>
      <HomePageTemplate data={frontmatter} />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        links {
          link {
            content
            url
          }
        }
      }
    }
    
  }
`


export default HomePage
