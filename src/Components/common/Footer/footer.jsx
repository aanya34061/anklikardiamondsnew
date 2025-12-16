import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="lux-footer pt-5 pb-3 mt-5">
      <Container>

        <Row className="gy-4">

          {/* Brand */}
          
             <Col md={4} className="text-center text-md-start">
            <img
              src={logo}
              alt="Anklikar Diamonds"
              className="footer-logo mb-2"
            />
            
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-3">
              <a href="https://www.instagram.com/anklikardiamonds/" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
              <a href="https://wa.me/919098811008" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp /></a>
              <a href="https://www.facebook.com/share/1AQihhvTRu/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="social-icon"><FaFacebook /></a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold text-gold-primary mb-3">Quick Links</h5>
            <ul className="list-unstyled small footer-links">
              <li><a href="/" className="lux-link">Home</a></li>
              <li><a href="/collections" className="lux-link">Collections</a></li>
              <li><a href="/about" className="lux-link">About Us</a></li>
              <li><a href="/contact" className="lux-link">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold text-gold-primary mb-3">Contact Us</h5>
            <ul className="list-unstyled small footer-links">
              <li><FaLocationDot className="me-2" /> G-12 Anklikar Plaza,70 Bada Sarafa, Indore</li>
              <li><FaPhoneAlt className="me-2" /> +91-9098811008</li>
              <li><FaEnvelope className="me-2" /> aklank4u@gmail.com</li>
            </ul>
          </Col>

        </Row>

        {/* bottom copyright */}
        <div className="text-center small  mt-4 text-gold-primary pt-3 border-top border-gold">
          © {new Date().getFullYear()} Anklikar Diamonds & Jewellery • All Rights Reserved
        </div>

      </Container>
    </footer>
  );
};

export default Footer;
