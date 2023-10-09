import React from 'react'
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'


export const Header = () => {
  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
     

  )
}
