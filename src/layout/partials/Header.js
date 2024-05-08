import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../../assets/img/LogoCRM.jpg';
import './partials.css'; // Import your CSS file

function Header() {
  return (
    <Navbar collapseOnSelect bg='black' variant='dark' expand='md'>
      <Navbar.Brand>
        <img src={Logo} alt='Logo' width='50px'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
