import React from 'react'
import { Link } from 'gatsby'
import ReactSVG from 'react-svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className='footer py-5 absolute bottom-0 w-full'>
        <div className='container text-center'>
          <a href="https://cleancommit.io" className="text-grey text-center text-sm font-regular">
            Created by cleancommit.io
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
