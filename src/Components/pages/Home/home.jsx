import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// assets
import bannerVideo from "../../assets/anklikar1.mp4";
import aboutVideo from "../../assets/about.mp4";
import Gold from "../../assets/gold .png";
import Diamond from "../../assets/diamond1.png";
import Moissanite from "../../assets/moissanite1.png";
import LabGrown from "../../assets/labgrown1.png";
import Signity from "../../assets/siginity1.png";
import Silver from "../../assets/silver.png";
import Gemstone from "../../assets/gemstone.png";
import Semigem from "../../assets/semigemstone.png";
import Gemstones from "../../assets/gemstones.png";
import Modeljwellery from "../../assets/whyus.png";

const HomePage = () => {

  // 🔥 Correct AOS Initialization
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      offset: 120,
      once: false,       // animations repeat on scroll
    });

    const refreshAOS = () => AOS.refresh();
    window.addEventListener("load", refreshAOS);
    return () => window.removeEventListener("load", refreshAOS);
  }, []);

  const categories = [
    { title: "Diamond Jewellery", img: Diamond },
    { title: "Moissanite Jewellery", img: Moissanite },
    { title: "Lab-Grown Jewellery", img: LabGrown },
    { title: "Signity Jewellery", img: Signity },
    { title: "Gold Jewellery", img: Gold },
    { title: "Silver Jewellery", img: Silver },
    { title: "Gemstone Jewellery", img: Gemstone },
    { title: "Semi-Precious Gemstones", img: Semigem },
    { title: "Precious Gemstones", img: Gemstones },
  ];

  return (
    <>
      {/* ================= VIDEO BANNER ================= */}
      <div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="banner-video w-100 h-100"
        >
          <source src={bannerVideo} type="video/mp4" />
        </video>
      </div>

      {/* ================= HERO ================= */}
      <Container className="py-5 text-center mt-4">
        <h1 className="fw-bold text-uppercase text-gold-primary" data-aos="fade-down">
          Anklikar Diamonds & Jewellery
        </h1>
        <p className="text-muted" data-aos="fade-up">
          Since 2007 — Crafting Timeless Elegance
        </p>
      </Container>

      {/* ================= MANUFACTURING / ABOUT ================= */}
      <Container className="py-5">
        <Row className="align-items-center">

          <Col md={6} data-aos="fade-right">
            <h3 className="fw-bold text-gold-secondary">
              We Manufacture All Types of Jewellery
            </h3>

            <p className="text-muted mt-3">
              At <strong>Anklikar Diamonds & Jewellery</strong>, we are not merely jewellers —
              we are <strong>manufacturers of luxury craftsmanship</strong>. For more than
              <strong> 18 years</strong>, we have shaped ideas into masterpieces that reflect
              high precision, ethical sourcing, and lifelong purity.
            </p>

            <p className="text-muted">
              We design jewellery that blends
              <strong> modern elegance with traditional artistry</strong>, making every piece
              suitable for weddings, daily wear, gifting, and investment.
            </p>

            <p className="fw-semibold text-gold-secondary">
              Our Manufacturing Specialization:
            </p>

            <ul className="text-muted">
              <li>Diamond Jewellery (Certified Brilliance & Premium Cuts)</li>
              <li>Moissanite Jewellery (Luxury Shine at Best Value)</li>
              <li>Lab-Grown Diamond Jewellery (Eco-Friendly & Ethical)</li>
              <li>Signity Jewellery (Superior Shine in Budget Luxury)</li>
              <li>Gold Jewellery – Hallmarked <strong>14K, 18K & 22K</strong></li>
              <li>Silver Jewellery with Anti-Tarnish Finishing</li>
              <li>Precious Gemstones – Ruby, Emerald, Sapphire & More</li>
              <li>Semi-Precious Gemstones – Stylish & Affordable</li>
              <li>Exclusive Gemstone Jewellery – Traditional & Contemporary</li>
            </ul>

            <p className="fw-semibold text-gold-primary mt-3">
              “Built with Trust, Designed with Passion, Crafted for Generations.”
            </p>
          </Col>

          <Col md={6} data-aos="fade-left" className="jewel-video-wrapper">
            <div className="jewel-video-fixed">
              <video src={aboutVideo} autoPlay loop muted playsInline />
            </div>
          </Col>

        </Row>
      </Container>

      {/* ================= MATERIALS & QUALITY ASSURANCE ================= */}
      <Container className="py-5">
        <h3 className="text-center fw-bold text-gold-secondary mb-5" data-aos="fade-up">
          Materials & Quality Assurance
        </h3>

        <Row className="quality-grid">
          {[
            { title: "Hallmarked Gold", desc: "Guaranteed purity in 14K, 18K & 22K with BIS hallmarking.", icon: "bi-shield-check" },
            { title: "Certified Diamonds", desc: "Natural & lab-grown diamonds certified for authenticity.", icon: "bi-gem" },
            { title: "Premium Gemstones", desc: "High-grade precious & semi-precious stones.", icon: "bi-brightness-high" },
            { title: "Anti-Tarnish Silver", desc: "Sterling silver jewellery with anti-tarnish coating.", icon: "bi-droplet-half" },
            { title: "Precision Finishing", desc: "Strict finishing checks for polish & durability.", icon: "bi-stars" },
            { title: "Authenticity Guarantee", desc: "Lifetime polishing & certificate on request.", icon: "bi-patch-check" },
          ].map((item, i) => (
            <Col md={4} className="quality-card" key={i} data-aos="zoom-in" data-aos-delay={i * 80}>
              <div className="quality-icon"><i className={`bi ${item.icon}`}></i></div>
              <h5 className="fw-semibold mt-3">{item.title}</h5>
              <p className="text-muted small">{item.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* ================= CATEGORIES ================= */}
      <Container className="py-4">
        <h3 className="text-center mb-4 fw-bold text-gold-secondary" data-aos="fade-up">
          Our Categories
        </h3>

        <Row className="category-collage">
          {categories.map((item, index) => (
            <Col key={index} xs={6} md={4} className="collage-item" data-aos="zoom-in" data-aos-delay={index * 70}>
              <img src={item.img} alt={item.title} className="collage-img" />
              <span className="collage-label">{item.title}</span>
            </Col>
          ))}
        </Row>
      </Container>

     
      {/* ================= OUR SPECIALIZED WORK (HIGHLIGHTED) ================= */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-gold-primary" data-aos="fade-down">
            Our Expertise & Main Work
          </h2>
          <p className="text-muted" data-aos="fade-up">
            End-to-end jewellery manufacturing trusted by retailers, wholesalers & custom clients across India.
          </p>
        </div>

        <Row className="gy-4">

          {/* MAIN MANUFACTURING WORK */}
          <Col lg={12} data-aos="fade-right">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h4 className="fw-bold text-gold-secondary mb-3">Jewellery Manufacturing (All Types)</h4>
              <p className="text-muted mb-2">
                We manufacture high-quality <strong>Gold, Diamond, Moissanite, Lab-Grown, Silver & Gemstone jewellery</strong> using premium raw materials, modern systems and certified stones.
              </p>

              <p className="text-muted mb-1"><strong>Our focus is on customization,</strong> where every design is built exactly as clients imagine — unique, luxurious, and artistically detailed.</p>

              <ul className="mt-3 text-muted">
                <li>Customised gold, stone, diamond & gemstone jewellery</li>
                <li>Lightweight fancy designs with <strong>CAD & CAM technology</strong></li>
                <li>Manufacturing for retail stores, wholesalers & brands</li>
                <li>Factory-direct pricing with premium quality</li>
              </ul>
            </div>
          </Col>

          {/* PROCESS DETAILS */}
          <Col lg={12} data-aos="fade-left">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h4 className="fw-bold text-gold-secondary mb-3">Specialised Crafting Processes</h4>
              <p className="text-muted">
                We combine modern technology with master craftsmanship for stronger finishing, high precision and long-lasting shine.
              </p>

              <Row className="mt-3">
                <Col md={4}>
                  <ul className="text-muted">
                    <li>Wax Mould Jewellery</li>
                    <li>Casting Jewellery</li>
                    <li>Handmade Jewellery</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="text-muted">
                    <li>Micro Setting & Stone Fitment</li>
                    <li>Designer CAD Modelling</li>
                    <li>CAM Precision Cutting</li>
                  </ul>
                </Col>
                <Col md={4}>
                  <ul className="text-muted">
                    <li>Mirror Polishing</li>
                    <li>Hallmark Certification</li>
                    <li>Premium Finishing</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>

          {/* PURCHASE SECTION */}
          <Col lg={12} data-aos="fade-up">
            <div className="p-4 border rounded shadow-sm bg-white">
              <h4 className="fw-bold text-gold-secondary mb-3">We Also Purchase</h4>
              <p className="text-muted mb-2">
                We buy old jewellery at genuine and transparent value assessment.
              </p>

              <ul className="text-muted">
                <li>Old Jewellery — valued at genuine market rate</li>
                <li>Old Antique Jewellery</li>
                <li>Loose Diamonds & Precious Gemstones</li>
                <li>Semi-Precious Colour Stones</li>
              </ul>

              <p className="fw-semibold text-gold-primary mt-3">
                Fair value. Transparent process. Trusted deals.
              </p>
            </div>
          </Col>

        </Row>
      </Container>


      {/* ================= STORE LOCATION ================= */}
      <h1 className="text-center fw-bold text-gold-primary mb-4" data-aos="fade-down">
        Visit Our Store
      </h1>

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
    </>
  );
};

export default HomePage;
