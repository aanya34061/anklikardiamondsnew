import React, { useEffect, useState, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const JewelryNavbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef(null);

  // Glass effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar
      ref={navRef}
      expand="lg"
      expanded={expanded}
      className={`jewel-navbar py-3 fixed-top ${scrolling ? "nav-glass" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img src={logo} alt="Logo" className="jewel-logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="gap-4">
            <Nav.Link as={Link} to="/" className="jewel-link" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/collections" className="jewel-link" onClick={() => setExpanded(false)}>Collections</Nav.Link>
            <Nav.Link as={Link} to="/about" className="jewel-link" onClick={() => setExpanded(false)}>About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="jewel-link" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default JewelryNavbar;
