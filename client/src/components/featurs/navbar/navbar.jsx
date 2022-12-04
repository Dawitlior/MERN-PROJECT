import React from 'react'
import './navbar.css'
import { Container,Navbar } from 'react-bootstrap';
function navbar() {
  return (
    <>
      <br />
      <Navbar bg="black">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
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
