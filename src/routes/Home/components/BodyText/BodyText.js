import React from 'react'
import './BodyText.scss'
import { Row, Col } from 'react-bootstrap'

const practiceName = 'Mario Land'

export const BodyText = () => (
  <div className='body-text'>
    <h1>Welcome to <span>{practiceName}</span></h1>
    <Row>
      <Col xs={6} md={6}>
        <p>Ea veniam ut sequi temporibus consequatur omnis. Similique error earum sed mollitia iusto, voluptate eos, voluptates, asperiores aliquid enim voluptatem nulla amet praesentium! Corrupti beatae laboriosam saepe, dolorem ullam porro!
    </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laboriosam harum labore consequatur, optio voluptatem provident quisquam, eius pariatur commodi, quos? Delectus excepturi impedit dolore itaque, unde iure accusamus doloribus.
    </p>
        <p>Quibusdam ducimus neque placeat mollitia esse quia nihil iste iusto repellat, fuga facere commodi doloribus voluptatem reiciendis laboriosam cumque veniam eos quis ratione rem a perferendis cupiditate at? Excepturi, vitae.
    </p>
        <p>Ullam, iste provident expedita velit suscipit deleniti vel laborum atque. Deleniti possimus quas quod non, tenetur, enim, quae excepturi iure, provident accusantium eum illum porro aliquid quam. Veniam, harum, at.
    </p>
      </Col>
      <Col xs={6} md={6}>
        <p>Ea veniam ut sequi temporibus consequatur omnis. Similique error earum sed mollitia iusto, voluptate eos, voluptates, asperiores aliquid enim voluptatem nulla amet praesentium! Corrupti beatae laboriosam saepe, dolorem ullam porro!
    </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo laboriosam harum labore consequatur, optio voluptatem provident quisquam, eius pariatur commodi, quos? Delectus excepturi impedit dolore itaque, unde iure accusamus doloribus.
    </p>
        <p>Quibusdam ducimus neque placeat mollitia esse quia nihil iste iusto repellat, fuga facere commodi doloribus voluptatem reiciendis laboriosam cumque veniam eos quis ratione rem a perferendis cupiditate at? Excepturi, vitae.
    </p>
        <p>Ullam, iste provident expedita velit suscipit deleniti vel laborum atque. Deleniti possimus quas quod non, tenetur, enim, quae excepturi iure, provident accusantium eum illum porro aliquid quam. Veniam, harum, at.
    </p>
      </Col>
    </Row>
  </div>
)

export default BodyText
