import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import './Spotlight.scss'

export const Spotlight = ({ id }) => (
  <div className='spotlight-container'>
    <Row className='spotlight'>
      <Col xs={8} md={8} id='col-1'>
        <div className='spotPicture' id={id} />
      </Col>
      <Col xs={4} md={4} id='col-2' />
    </Row>
  </div>
)

Spotlight.propTypes = {
  id: PropTypes.id,
}

export default Spotlight
