import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap'
import './HeaderNav.scss'

export const MainNav = ({ children }) => (
  <Navbar inverse collapseOnSelect>
    {/* <Navbar.Header>
      <Navbar.Brand>
        <a href='#'>React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header> */}
    <Navbar.Collapse>
      <Nav justified>
        <NavItem eventKey={1} href='#'>Home</NavItem>
        <NavDropdown eventKey={1} title='Mushroom Kingdom' id='basic-nav-dropdown'>
          <MenuItem eventKey={1.1} />
          <MenuItem eventKey={1.2} />
          <MenuItem eventKey={1.3} />
        </NavDropdown>
        <NavDropdown eventKey={2} title='Bowser&apos;s Castle' id='basic-nav-dropdown'>
          <MenuItem eventKey={2.1} />
          <MenuItem eventKey={2.2} />
          <MenuItem eventKey={2.3} />
        </NavDropdown>
        <NavDropdown eventKey={3} title='Prominent Games' id='basic-nav-dropdown'>
          <MenuItem eventKey={3.1} />
          <MenuItem eventKey={3.2} />
          <MenuItem eventKey={3.3} />
        </NavDropdown>
        <NavDropdown eventKey={4} title='Mario&apos;s Powerups' id='basic-nav-dropdown'>
          <MenuItem eventKey={4.1} />
          <MenuItem eventKey={4.2} />
          <MenuItem eventKey={4.3} />
        </NavDropdown>
        <NavDropdown eventKey={5} title='Contact' id='basic-nav-dropdown'>
          <MenuItem eventKey={5.1} />
          <MenuItem eventKey={5.2} />
          <MenuItem eventKey={5.3} />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

MainNav.propTypes = {
  children: PropTypes.node,
}

export default MainNav
