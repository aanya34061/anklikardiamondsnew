import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// IMAGES
import FactoryHero from "../../assets/whyus.png";
import ModelSet from "../../assets/modeljwellery.png";
import Gemwork from "../../assets/diamond1.png";
import Tools from "../../assets/moissanite1.png";
import Aboutslider from "../../assets/About-us-1.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const features = [
    {
      img: ModelSet,
      title: "Customized Jewellery",
      desc: "Tell us your idea — we design, manufacture & deliver your perfect piece.",
      icon: "bi bi-pencil-square"
    },
    {
      img: Gemwork,
      title: "Certified Materials",
      desc: "Hallmarked Gold • Certified Diamonds • Precious Gemstones.",
      icon: "bi bi-patch-check"
    },
    {
      img: Tools,
      title: "Crafted by Artisans",
      desc: "Perfect polishing, stone setting & finishing by expert hands.",
      icon: "bi bi-gem"
    }
  ];

  const stats = [
    { value: "18+", label: "Years of Expertise" },
    { value: "5000+", label: "Unique Designs Crafted" },
    { value: "100%", label: "Hallmarked Jewellery" },
    { value: "24K→14K", label: "All Purity Options" }
  ];

  return (
    <section className="about-section">
      <div className="about-banner">
        <img src={Aboutslider} alt="About Anklikar Jewellery" />

      </div>

      {/* HERO
      <div className="about-hero text-center">
        <h1 className="fw-bold text-gold-primary" data-aos="fade-down">
          About Us
        </h1>
        <p className="text-muted mt-2" data-aos="fade-up">
          Crafting masterpieces with precision, purity & passion since 2007.
        </p>
      </div> */}

      {/* TWO-PART IMAGE + ABOUT */}
      <Container className="py-5">
        <Row className="align-items-center">

          <Col md={6} data-aos="fade-right">
            <div className="about-img-hero">
              <img src={FactoryHero} alt="About Jewellery Manufacturing" />
            </div>
          </Col>

          <Col md={6} data-aos="fade-left">
            <h3 className="fw-bold text-gold-secondary">Our Story</h3>

            <p className="text-muted mt-3">
              What began as a small artisan-led workshop has grown into a trusted
              <strong> jewellery manufacturing house in India</strong>, supplying premium collections to
              retailers, wholesalers, online brands and custom clients across the country.
              Our journey has always been rooted in honest craftsmanship and ethical value.
            </p>

            <p className="text-muted">
              Specializing in <strong>diamond, moissanite, lab-grown jewellery, gold, silver and gemstone designs</strong>,
              our strength lies in combining modern technology with timeless hand artistry.
              We believe jewellery shouldn’t just sparkle — it should reflect purity, strength and the story of its maker.
            </p>

            <p className="text-muted">
              Every design undergoes a meticulous journey — <strong>concept sketching, CAD development, precision moulding,
                casting, stone selection, microscopic stone-setting and mirror polishing</strong>.
              The result is jewellery that carries high durability, flawless finishing and a premium feel meant to last generations.
            </p>
          </Col>


        </Row>
      </Container>


      {/* STATS SECTION */}
      <Container className="py-5 text-center">
        <Row className="justify-content-center">
          {stats.map((s, i) => (
            <Col key={i} xs={6} md={3} className="mb-4" data-aos="fade-up">
              <h2 className="fw-bold text-gold-primary">{s.value}</h2>
              <p className="text-muted small">{s.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-5 why-split-section">
        <Container>
          <Row>
            <Col lg={4} className="pe-lg-5">
              <h2 className="fw-bold text-gold-primary mb-4" data-aos="fade-right">
                Why Choose <br /> Anklikar Jewellery
              </h2>

              <p className="small text-muted" data-aos="fade-right" data-aos-delay="150">
                Since 2007 — A legacy built on ethics, craftsmanship & trust passed down through generations.
              </p>
            </Col>

            <Col lg={8}>
              <div className="why-line-group" data-aos="fade-left">
                <h4 className="lux-line">01. Factory Direct Manufacturing</h4>
                <p className="text-muted">
                  We design, craft and finish every piece in our own facility — from CAD Designing, Moulding,
                  Casting, Stone Selection, to Final Polishing. This ensures premium finishing, zero middlemen
                  cost, and true value for our buyers.
                </p>
              </div>

              <div className="why-line-group" data-aos="fade-left" data-aos-delay="100">
                <h4 className="lux-line">02. Certified & Hallmarked Purity</h4>
                <p className="text-muted">
                  Every piece is stamped with BIS Hallmark and comes with certified authenticity in Gold,
                  Natural & Lab-Grown Diamonds, Moissanite, Silver and Precious Gemstones.
                </p>
              </div>

              <div className="why-line-group" data-aos="fade-left" data-aos-delay="200">
                <h4 className="lux-line">03. CAD Customisation & Exclusive Designs</h4>
                <p className="text-muted">
                  Whether you want bridal jewellery, custom designs, antique replicas, solitaire rings
                  or gemstone accessories — our CAD technology turns your imagination into wearable luxury.
                </p>
              </div>

              <div className="why-line-group" data-aos="fade-left" data-aos-delay="300">
                <h4 className="lux-line">04. Ethical Sourcing & Transparent Pricing</h4>
                <p className="text-muted">
                  We source diamonds, moissanite and gemstones responsibly, and offer factory-direct pricing.
                  No hidden charges, no artificial karat conversions — only honest value.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROMISE */}
      <Container className="py-5">
        <div className="promise-box text-center" data-aos="fade-up">

          <h2 className="fw-bold text-gold-secondary mb-3">
            Our Promise To You
          </h2>

          <p className="text-muted mt-3 fs-6 text-justify">
            At <strong>Anklikar Diamonds & Jewellery</strong>, every piece is shaped with the
            same dedication as an heirloom. We follow deeply rooted values of
            <strong> purity, honesty and long-term trust</strong> that go beyond selling jewellery.
          </p>

          <p className="text-muted fs-6 text-justify">
            From <strong>ethical sourcing of diamonds and gemstones</strong> to
            <strong>hallmarked gold and certified stones</strong>, each design is crafted responsibly.
            Our factory-direct pricing guarantees <strong>no middlemen, no inflated value,
              no compromise on quality</strong>.
          </p>

          <p className="text-muted fs-6 text-justify">
            Whether it’s a modern customised piece, timeless traditional jewellery or a precious stone purchase —
            you receive <strong>clarity, certified authenticity, transparent billing, and lifetime support</strong>.
          </p>

          <p className="fw-semibold text-gold-primary fs-5 mt-4">
            “You don’t just wear our jewellery — you cherish it, protect it, and pass it on.”
          </p>

        </div>
      </Container>


      {/* FEATURES CARDS */}
      <Container fluid className="pb-5">
        <Row className="g-0">
          {features.map((f, i) => (
            <Col xs={12} md={4} key={i} className="about-card text-center" data-aos="zoom-in">
              <div className="about-feature-img"><img src={f.img} alt={f.title} /></div>
              <i className={f.icon + " about-icon"}></i>
              <h5 className="fw-bold mt-3">{f.title}</h5>
              <p className="text-muted small px-3">{f.desc}</p>
            </Col>
          ))}
        </Row>
      </Container>



    </section>
  );
};

export default About;