import React from 'react'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'

import '../styles/pages/front-page.scss'

function scroll() {
  document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
}
export const HomePageTemplate = ({}) => {
  return (
    <>
      <section className='container mx-auto'>henlo</section>
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
