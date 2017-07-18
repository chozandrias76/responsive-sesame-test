import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Well, DropdownButton, MenuItem, ButtonToolbar, SplitButton } from 'react-bootstrap'
import './MainNav.scss'

export const MainNav = ({ children }) => (
  <div className='container main-nav'>
    <div className='main-nav-elements'>
        <IndexLink to='/' className='nav-dropdown'>Home</IndexLink>
        <Link to='/Our Team' className='nav-dropdown'>Our Team</Link>
        <Link to='/New Patients' className='nav-dropdown'>New Patients</Link>
        <Link to='/General Dentistry' className='nav-dropdown'>General Dentistry</Link>
        <Link to='/Dental Services' className='nav-dropdown'>Dental Services</Link>
        <Link to='/Dental Technology' className='nav-dropdown'>Dental Technology</Link>
        <Link to='/Contact' className='nav-dropdown'>Contact</Link>
    </div>
    {/*<div className='page-layout__viewport'>
      {children}
    </div>*/}
  </div>
)


MainNav.propTypes = {
  children: PropTypes.node,
}

export default MainNav
