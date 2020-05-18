import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar nav">
      <Link
        to="/"
        style={{ color: '#4EB1BA', fontFamily: 'Playfair Display SC' }}
        className="navbar-brand brand brandName"
      >
        Bishal Aryal
      </Link>
      <Navbar.Toggle
        style={{ color: '#4EB1BA' }}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto links">
          <Link style={{ color: '#4EB1BA' }} to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" style={{ color: '#4EB1BA' }} className="nav-link">
            About
          </Link>
          <Link to="/blog" style={{ color: '#4EB1BA' }} className="nav-link">
            Blog
          </Link>
          <Link to="/newpost" style={{ color: '#4EB1BA' }} className="nav-link">
            New Post
          </Link>
          <Link to="/contact" style={{ color: '#4EB1BA' }} className="nav-link">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
