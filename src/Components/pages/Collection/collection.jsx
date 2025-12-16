import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// Videos
import BridalVideo from "../../assets/necklace.mp4";
import DailyWearVideo from "../../assets/ring.mp4";
import OfficeVideo from "../../assets/bracelet.mp4";
import PartyVideo from "../../assets/bangle.mp4";
import MenVideo from "../../assets/mensjwellery.mp4";
import Earing from "../../assets/earing.mp4";
import Collection from "../../assets/ourcollection.png";

const Collections = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  // Collection Data with Elaborated Text
  const collections = [
    {
      title: "Bridal Jewellery",
      video: BridalVideo,
      desc: "Crafted for unforgettable moments, our Bridal Collection blends traditional artistry with modern luxury. Each piece is designed to enhance the bride’s radiance using brilliant stones, intricate detailing, and heirloom craftsmanship meant to be cherished for generations."
    },
    {
      title: "Daily Wear Collection",
      video: DailyWearVideo,
      desc: "Elegance made effortless — our Daily Wear assortment offers light, stylish and durable designs that complement your everyday look. Each piece is crafted with premium precision, bringing subtle sophistication to even the simplest moments."
    },
    {
      title: "Office Wear Collection",
      video: OfficeVideo,
      desc: "Minimal, refined and confidence-boosting — our Office Wear jewellery enhances your professional presence. Designed for strong, modern women, these pieces strike the perfect balance between grace, luxury and subtlety."
    },
    {
      title: "Party Wear Glam Collection",
      video: PartyVideo,
      desc: "A celebration of sparkle and sophistication. This glamorous collection features dazzling stones and bold aesthetics, making every event your personal runway moment. Perfect for those who love to stand out."
    },
    {
      title: "Men’s Exclusive Collection",
      video: MenVideo,
      desc: "Bold, timeless, and powerfully expressive. Our Men's Collection includes premium bracelets, rings and chains crafted with masculine elegance and durability — perfect for men who appreciate refined luxury."
    },
     { title: "Eternal Spark – Earring Collection", video: Earing ,
      desc: "Elevate your style with our Eternal Spark Earring Collection. Featuring a variety of designs from classic studs to statement chandeliers, each piece is crafted to add a touch of brilliance and sophistication to any ensemble."
     },

  ];

  return (
    
    
    <div >
      {/* COLLECTION BANNER */}
     <section>
    <div className="contact-banner">
      <img src={Collection} alt="Anklikar Jewellery Collections" />
    </div>
  </section>

      {/* TITLE */}
      <Container className="text-center mb-5">
        <h1 className="fw-bold text-gold-primary" data-aos="fade-down">
          Our Signature Collections
        </h1>
        <p className="text-muted w-75 mx-auto" data-aos="fade-up">
          Explore our premium jewellery collections designed for every occasion — from daily elegance
          to grand celebrations. Each collection reflects true craftsmanship, purity and brilliance.
        </p>
      </Container>

      {/* COLLECTION GRID */}
      <Container>
        <Row className="gy-5">

          {collections.map((item, index) => (
            // 
            <Col lg={4} md={6} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="collection-card h-100 d-flex flex-column border border-gold rounded shadow-sm overflow-hidden">

                {/* VIDEO */}
                <div className="collection-video-box">
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="collection-video"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-3 text-center flex-grow-1 d-flex flex-column">
                  <h5 className="fw-bold text-gold-secondary">{item.title}</h5>
                  <p className="text-muted small text-justify flex-grow-1">
                    {item.desc}
                  </p>
                </div>

              </div>
            </Col>

          ))}

        </Row>
      </Container>
      

      {/* FOOT NOTE */}
      <Container className="text-center mt-5">
        <p className="fw-semibold text-gold-primary">
          More luxurious collections are added every month — stay tuned for exclusive releases.
        </p>
      </Container>

    </div>
  );
};

export default Collections;
