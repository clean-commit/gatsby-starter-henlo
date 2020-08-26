import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import GitHubButton from 'react-github-btn'

export const HomePageTemplate = ({ }) => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <div className="container px-5 sm:px-10">
          <section className="w-full bg-teal-100 py-20 px-5 rounded-lg shadow border-grey-lighter border">
            <div className='text-center mx-auto'>
              <ReactSVG src="/img/logo.svg" class="logo"></ReactSVG>
            </div>
            <div className="text-center mt-6">
              <span className="mr-3">
                <GitHubButton href="https://github.com/clean-commit/gatsby-starter" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-show-count="true" data-icon="octicon-star" aria-label="Star clean-commit/gatsby-starter on GitHub">Star</GitHubButton>
              </span>
              <span>
                <GitHubButton href="https://github.com/clean-commit/gatsby-starter/archive/master.zip" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-download" aria-label="Download clean-commit/gatsby-starter on GitHub">Download</GitHubButton>
              </span>
            </div>
            <div className="links">
              <a href="https://github.com/clean-commit/gatsby-starter" target="_blank" className="links__item">Documentation</a>
              <a href="https://cleancommit.io" target="_blank" className="links__item">Clean Commit</a>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

class HomePage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout hideNav={true}>
        <HomePageTemplate />
      </Layout>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage
