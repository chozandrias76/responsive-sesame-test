import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Header from '../HeaderLayout/Header'
// import Slideshow from '../SlideshowLayout/Slideshow.js'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    {/* <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link> */}
    {/* <Slideshow /> */}
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
