import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; 
import './Navbar.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track if the navbar is open
  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'MILESTONES', href: '#milestones' },
    { label: 'CONTACT', href: '#contact' },
  ];

  // Toggle the navbar open/close
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className=" navbar">
      <Navbar.Brand href="#home">
        <span className="logo fw-bold">&lt;/AVISHKA&gt;</span>
      </Navbar.Brand>
      
      {/* Custom Hamburger Icon */}
     <div>
     <Button
        variant="link"
        className="d-lg-none text-white"
        onClick={toggleNavbar}
      >
        <FaBars size={30} />
      </Button>
     </div>
      
      {/* Navbar Links */}
      <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
        <Nav className="mx-auto">
          {navLinks.map((item, index) => (
            <Nav.Link key={index} href={item.href} className="nav-links-container m-1 px-2 mx-4 nav-link">
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
        <Button   className="d-flex align-items-center d-none d-lg-block outline-button">
          <i className="bi bi-cloud-arrow-down-fill me-2 "></i>
          Resume
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
