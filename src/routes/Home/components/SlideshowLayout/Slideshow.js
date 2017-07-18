import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Well, DropdownButton, MenuItem, ButtonToolbar, SplitButton } from 'react-bootstrap'
import './Slideshow.scss'

export const Slideshow = ({ children }) => (
  <div className='slideshow-container'>
    <div className='slideshow' id='slide-01' />
  </div>
)

Slideshow.propTypes = {
  children: PropTypes.node,
}

export default Slideshow
