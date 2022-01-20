import React from 'react'
import Link from 'gatsby-link'

import './Header.css'


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScrolled: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'>
          <Link to="/">
            <img src={require('../images/logo-designcode.svg')} width="30" />
          </Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshop">Workshop</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}

export default Header
