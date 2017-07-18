import React from 'react'
import PropTypes from 'prop-types'
import './ParallaxPhoto.scss'

export const ParallaxPhoto = ({ imgUrl, id }) => (
  <div className='parallax-photo'>
    <img id={id} src={imgUrl} />
  </div>
)
ParallaxPhoto.propTypes = {
  imgUrl: PropTypes.imgUrl,
  id: PropTypes.id,
}

export default ParallaxPhoto
