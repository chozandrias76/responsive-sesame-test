import React from 'react'
import './HomeView.scss'
import Slideshow from './SlideshowLayout/Slideshow'
import BodyText from './BodyText/BodyText'
import ParallaxPhoto from './ParallaxPhoto/ParallaxPhoto'
import Spotlight from './Spotlight/Spotlight'

export const HomeView = () => (
  <div>
    <Slideshow />
    <BodyText />
    <ParallaxPhoto id='parallax-01' />
    <Spotlight id='mallow' />
    <ParallaxPhoto id='parallax-02' />
  </div>
)

export default HomeView
