import React from 'react';
import {Link} from 'gatsby'

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      content: '',
      navigation: [],
      isMenuOpen: false,
      currentScroll: 0,
      isNavigationVisible: false,
    }
    this.activateMenu = this.activateMenu.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  activateMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }

  handleScroll () {
    const lastScrollY = this.state.currentScroll;
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      this.setState({ isNavigationVisible: false });
    } else if (currentScrollY < lastScrollY) {
      this.setState({ isNavigationVisible: true });
    }
    this.setState({ currentScroll: currentScrollY });
  }


  render() {
    const activeClassName = 'nav-link--active'
    const activeMobileClassName = 'mobile-link--active'
    let navigationClass
    if (this.state.currentScroll < 66 && !this.state.isNavigationVisible || this.state.currentScroll < 3) {
      navigationClass = 'navigation'
    } else if (this.state.currentScroll < 120 && !this.state.isNavigationVisible || this.state.currentScroll < 6)  {
      navigationClass = 'navigation navigation--fixed';
    } else {
      navigationClass = 'navigation navigation--fixed navigation--animate' + (this.state.isNavigationVisible ? ' navigation--visible' : ' navigation--hidden');
    }

    if (this.state.isMenuOpen) {
      navigationClass += ' navigation--open'
    }
    let btnClass = 'btn btn--nav' + (this.state.isMenuOpen ? ' btn--active' : '')
    let brandClass = 'navbar__logo brand' + (this.state.isMenuOpen ? ' brand--white' : '')
    let navClass = 'mobile-nav' + (this.state.isMenuOpen ? ' mobile-nav--active' : '')

    return (
      <header className="header">
        <div className="navigation__ghost"></div>
        <nav className={navigationClass}>
          <div className="container">
            <div className="navigation__inner">
              <Link className={brandClass} to="/">mrkaluzny<span>.</span></Link>
              <div className={btnClass} onClick={this.activateMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="navigation__list">
                <Link to="/services/web-development" className="nav-link" activeClassName={activeClassName}>Web Development</Link>
                <Link to="/services/mobile-apps" className="nav-link" activeClassName={activeClassName}>Mobile Apps</Link>
                <Link to="/services/product-design" className="nav-link" activeClassName={activeClassName}>UX & UI</Link>
                <Link to="/clients" className="nav-link" activeClassName={activeClassName} partiallyActive>Clients</Link>
                <Link to="/blog" className="nav-link" activeClassName={activeClassName} partiallyActive>Blog</Link>
                <Link to="/contact" className="btn btn--standard btn--green" activeClassName={activeClassName}>Contact</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className={navClass}>
          <div className="mobile-nav__nav">
            <Link to="/services/web-development" className="mobile-link" activeClassName={activeMobileClassName}>Web Development</Link>
            <Link to="/services/mobile-apps" className="mobile-link" activeClassName={activeMobileClassName}>Mobile Apps</Link>
            <Link to="/services/product-design" className="mobile-link" activeClassName={activeMobileClassName}>UX & UI</Link>
            <Link to="/clients" className="mobile-link" activeClassName={activeMobileClassName} partiallyActive>Clients</Link>
            <Link to="/blog" className="mobile-link" activeClassName={activeMobileClassName} partiallyActive >Blog</Link>
            <Link to="/contact" className="mobile-link" activeClassName={activeMobileClassName}>Contact</Link>
          </div>
        </div>
      </header>
    );
  }
}
