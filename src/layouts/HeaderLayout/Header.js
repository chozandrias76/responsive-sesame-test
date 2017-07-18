import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import './Header.scss'

import MainNav from '../NavLayout/MainNav'

export const Header = ({ children }) => (
  <div className='container header'>
    <Row>
      <Col xs={4} md={4} id='col-1'>
        <p>(888) 0-MARIO</p>
      </Col>
      <Col xs={4} md={4} id='col-2'>
        <img src='http://i.imgur.com/w5RYah6.png' alt='' />
      </Col>
      <Col xs={4} md={4} id='col-3'>
        <FontAwesome
          className='fa fa-lock' />
        <FontAwesome
          className='fa fa-facebook' />
        <FontAwesome
          className='fa fa-instagram' />
        <FontAwesome
          className='fa fa-twitter' />
      </Col>
    </Row>
    <Row id='nav-row'>
      <MainNav />
    </Row>
  </div>
)

Header.propTypes = {
  children: PropTypes.node,
}

export default Header
