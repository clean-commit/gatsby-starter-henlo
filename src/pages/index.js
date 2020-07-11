import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'

export const HomePageTemplate = ({}) => {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center'>
        <section className='container text-center mx-auto'>
          <h1 className='title-h1'>Henlo.</h1>
        </section>
      </div>
    </>
  )
}

class HomePage extends React.Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
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
