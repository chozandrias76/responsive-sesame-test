import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button } from 'react-bootstrap'
import './Spotlight.scss'
// id, imgUrl, title, textLeft, sizeLeft, textContent
export const Spotlight = (spotProps) => (
  <SpotlightLayout {...spotProps} />
)

function SpotlightLayout (spotProps) {
  const textLeft = spotProps.props.textLeft
  return textLeft === 'true' ? <SpotLeftText {...spotProps} /> : <SpotRightText {...spotProps} />
}

function SpotLeftText (spotProps) {
  return <div className='spotlight-container' style={{ background: spotProps.props.backgroundColor }}>
    <Row className='spotlight'>
      <Col xs={8} md={8} id='col-1'>
        <div className='text-area'>
          <h2>Meet {spotProps.props.title}!</h2>
          <p>{spotProps.props.textContent}</p>
          <Button bsStyle='primary'>Learn More</Button>
        </div>
      </Col>
      <Col xs={4} md={4} id='col-2'>
        <div className='spotPicture' id={spotProps.props.id} style={combineObjects({ backgroundImage: spotProps.props.imgUrl }, spotStyle)} />
      </Col>
    </Row>
  </div>
}

function SpotRightText (spotProps) {
  return <div className='spotlight-container' style={{ background: spotProps.props.backgroundColor }}>
    <Row className='spotlight'>
      <Col xs={4} md={4} id='col-2'>
        <div className='spotPicture' id={spotProps.props.id} style={combineObjects({ backgroundImage: spotProps.props.imgUrl }, spotStyle)} />
      </Col>
      <Col xs={8} md={8} id='col-1'>
        <div className='text-area'>
          <h2>Meet {spotProps.props.title}!</h2>
          <p>{spotProps.props.textContent}</p>
          <Button bsStyle='primary'>Learn More</Button>
        </div>
      </Col>
    </Row>
  </div>
}

function combineObjects (style1, style2) {
  return Object.assign({}, style1, style2)
}

const spotStyle = {
  width: '100px',
  height: '100px',
  border: '1px solid #ccc',
  borderRadius: '16px',
  margin: '10px'
}

Spotlight.propTypes = {
  id: PropTypes.id,
  imgUrl: PropTypes.imgUrl,
  title: PropTypes.title,
  textLeft: PropTypes.textLeft,
  sizeLeft: PropTypes.sizeLeft,
  textContent: PropTypes.textContent
}

export default Spotlight
