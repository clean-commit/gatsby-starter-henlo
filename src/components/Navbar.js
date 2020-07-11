import React from 'react'
import { Link } from 'gatsby'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: '',
      content: '',
      navigation: [],
      isMenuOpen: false,
      isNavigationVisible: false,
    }
    this.activateMenu = this.activateMenu.bind(this)
    this.deactivateMenu = this.deactivateMenu.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.deactivateMenu)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.deactivateMenu)
  }

  activateMenu() {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }

  deactivateMenu() {
    this.setState({
      isMenuOpen: false,
    })
  }

  render() {
    const activeClassName = 'nav-link--active'

    let btnClass =
      'btn btn-nav' + (this.state.isMenuOpen ? ' btn-nav--active' : '')
    let navClass =
      'mobile-nav' + (this.state.isMenuOpen ? ' mobile-nav--active' : 'hidden')

    return (
      <>
        <header className='header'>
          <div className='navigation__ghost'></div>
          <nav className='navigation'>
            <div className='container'>
              <div className='navigation__inner py-5 flex items-center justify-between'>
                <Link className='brand' to='/'>
                  Henlo
                </Link>
                <div className={btnClass} onClick={this.activateMenu}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className='navigation__list'>
                  <Link
                    to='/blog'
                    className='nav-link mr-2'
                    activeClassName={activeClassName}
                    partiallyActive>
                    Blog
                  </Link>
                  <Link
                    to='/contact'
                    className='btn btn--standard btn--green'
                    activeClassName={activeClassName}>
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className={navClass}></div>
      </>
    )
  }
}
