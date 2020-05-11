import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar nav">
      <Link to="/" className="navbar-brand brand brandName">
        Bishal Aryal
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/newpost" className="nav-link">
            New Post
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavHeader;
