import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Contactus from "../../assets/Contact-us.png";

const Contact = () => {
  return (
    <div className="contact-page ">
      <div className="contact-banner">
        <img src={Contactus} alt="About Anklikar Jewellery" />

      </div>

      {/* HEADER */}
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-gold-primary">Get in Touch</h1>
        <p className="text-muted">
          Have a query? Looking for a custom jewellery design? We’re here to assist you with purity, transparency & premium service.
        </p>
      </Container>

      <Container>
        <Row className="gy-5">

          {/* LEFT INFO SECTION */}
          <Col md={4} className="text-center text-md-start">
            <h4 className="fw-bold text-gold-secondary mb-4">Contact Details</h4>

            <p className="small text-muted mb-2">
              <FaLocationDot className="me-2 text-gold-primary" /> G-12 Anklikar Plaza, 70 Bada Sarafa, Indore, MP
            </p>
            <p className="small text-muted mb-2">
              <FaPhoneAlt className="me-2 text-gold-primary" /> +91-XXXXXXXXXX
            </p>
            <p className="small text-muted mb-4">
              <FaEnvelope className="me-2 text-gold-primary" /> info@anklikardiamonds.com
            </p>

            <h6 className="fw-semibold text-gold-secondary mb-3">Follow Us</h6>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaWhatsapp /></a>
              <a href="#" className="social-icon"><FaFacebook /></a>
            </div>
          </Col>

          {/* RIGHT FORM SECTION */}
          <Col md={8}>
            <div className="p-4 border border-gold rounded">
              <h4 className="fw-bold text-gold-primary mb-3">Send us a Message</h4>
              {/* <Form>
                <Row className="gy-3">

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Mobile Number</Form.Label>
                      <Form.Control type="number" placeholder="Enter your contact number" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Requirement Type</Form.Label>
                      <Form.Select>
                        <option>Select Option</option>
                        <option>Custom Jewellery</option>
                        <option>Diamond/Moissanite</option>
                        <option>Gold/Silver Jewellery</option>
                        <option>Gemstones</option>
                        <option>Bulk Orders</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label className="small text-muted">Message</Form.Label>
                      <Form.Control as="textarea" rows={3} placeholder="Tell us more..." />
                    </Form.Group>
                  </Col>

                  <Col className="text-end">
                    <Button className="btn btn-dark px-4">
                      Send Inquiry
                    </Button>
                  </Col>

                </Row>
              </Form> */}
              <Form
                action="https://formspree.io/f/mkgdpgwq"
                method="POST"
              >
                <Row className="gy-3">

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Mobile Number</Form.Label>
                      <Form.Control
                        type="number"
                        name="phone"
                        placeholder="Enter your contact number"
                        required
                        minLength={10}
                        maxLength={10}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small text-muted">Requirement Type</Form.Label>
                      <Form.Select name="requirement" required>
                        <option value="">Select Option</option>
                        <option>Custom Jewellery</option>
                        <option>Diamond/Moissanite</option>
                        <option>Gold/Silver Jewellery</option>
                        <option>Gemstones</option>
                        <option>Bulk Orders</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group>
                      <Form.Label className="small text-muted">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={3}
                        placeholder="Tell us more..."
                        required
                        minLength={10}
                      />
                    </Form.Group>
                  </Col>

                  {/* FORM SUCCESS MESSAGE (optional) */}
                  <Col>
                    <p className="text-success small mt-2 d-none" id="formSuccess">
                      Your inquiry has been sent successfully!
                    </p>
                  </Col>

                  <Col className="text-end">
                    <Button type="submit" className="btn btn-dark px-4">
                      Send Inquiry
                    </Button>
                  </Col>

                </Row>
              </Form>

            </div>
          </Col>
        </Row>
      </Container>

      {/* MAP */}
      <Container className="mt-5">
        <h4 className="fw-bold text-gold-secondary text-center mb-3">Find Us On Map</h4>
        <div className="store-map" data-aos="zoom-in">
          <iframe
            title="store-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2823955281206!2d75.85078627514964!3d22.71774282763543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4e54523c2b%3A0xcdee1dfc6b2ffede!2sAnklikar%20diamonds!5e0!3m2!1sen!2sin!4v1765117436287!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="store-map-iframe"
          ></iframe>
        </div>
      </Container>

    </div>
  );
};

export default Contact;
