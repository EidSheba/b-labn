import React from 'react';
import './nav.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const CustomNavbar = () => (
  <Navbar expand="lg" className="custom-navbar" variant="dark">
    <Container fluid>
      <Navbar.Brand href="#" className="d-flex align-items-center me-2">
        <img src="/images/logo.jpg" alt="Logo" className="navbar-logo ms-5" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav" className="justify-content-center">
        <Nav className="mx-auto my-2 my-lg-0 gap-lg-4 gap-2 align-items-lg-center">
          <Nav.Link href="#" className="text-white">Home</Nav.Link>
          <Nav.Link href="#" className="text-white">Menu</Nav.Link>
          <Nav.Link href="#" className="text-white">About</Nav.Link>
          <Nav.Link href="#" className="text-white">Contact Us</Nav.Link>
        </Nav>
      <Button variant="light" className="ms-lg-2 mt-2 mt-lg-0 me-5">Sign In</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavbar; 