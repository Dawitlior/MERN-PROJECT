import React from 'react'
import './navbar.css'
import { Container, Navbar } from 'react-bootstrap';
function navbar() {
  return (
    <>
      <Navbar style={{ background: "#032B45" }}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo512.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default navbar;
