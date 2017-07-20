import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Well, NavDropdown, MenuItem, ButtonToolbar, SplitButton } from 'react-bootstrap'
import './MainNav.scss'

export const MainNav = ({ children }) => (
  <div className='container main-nav'>
    <div className='main-nav-elements'>
      <div className='nav-container'>
        <IndexLink to='/' className='nav-dropdown'>Home</IndexLink>
      </div>
      <NavDropdown title='Mushroom Kingdom' className='nav-container nav-dropdown'>
        <Link to='/mushroom-kingdom' className='nav-dropdown'>Mushroom Kingdom</Link>
      </NavDropdown>
      <NavDropdown title='Bowser&apos;s Castle' className='nav-container nav-dropdown'>
        <Link to='/boswers-castle' className='nav-dropdown'>Bowser's Castle</Link>
      </NavDropdown>
      <NavDropdown title='Popular Titles' className='nav-container nav-dropdown'>
        <Link to='/popular-titles' className='nav-dropdown'>Popular Titles</Link>
      </NavDropdown>
      <NavDropdown title='Contact' className='nav-container nav-dropdown'>
        <Link to='/contact' className='nav-dropdown'>Contact</Link>
      </NavDropdown>
    </div>
    {/* <div className='page-layout__viewport'>
      {children}
    </div> */}
  </div>
)

MainNav.propTypes = {
  children: PropTypes.node,
}

export default MainNav
