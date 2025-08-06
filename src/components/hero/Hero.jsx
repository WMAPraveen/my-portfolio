// components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';
import Profile from '../../assets/profile.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false); 

  const titles = [
    'Full-Stack Developer',
    'Web Designer',
    'Software Engineer',
    'UI/UX Enthusiast',
  ];

  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(titles[currentIndex].slice(0, displayedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    } else {
      if (displayedText.length < titles[currentIndex].length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(titles[currentIndex].slice(0, displayedText.length + 1));
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <section id="home" className="hero-section text-white" style={{ minHeight: '100vh' }}>
      <Container>
        <Row className="align-items-center hero-container">
          <Col xs={12} lg={6} className="text-section">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="poppins-bold">
                <span className='hero-title'>Hi, I am</span><br />
                <span className="my-name">Avishka,</span><br />
                <span className="typing-text hero-title">{displayedText}</span>
              </h1>
              <p className="welcome-text mt-4 poppins-semibold">
                Welcome to my portfolio! Avishka Wijesinghe is an Experienced Full Stack Developer with a passion for crafting visually stunning and intuitive web experiences.
              </p>
              <div className="mt-4">
                <a href="/Avishka Resume.pdf" download="Avishka Resume.pdf">
                  <Button className="me-2 button-full">
                    <i className="bi bi-cloud-arrow-down-fill me-2"></i>
                    Resume
                  </Button>
                </a>

                <Button href='#contact' className="me-2 outline-button">
                  <i className="bi bi-envelope-fill me-2"></i>
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </Col>

          <Col xs={12} lg={6} className="profile-image-section d-flex justify-content-center align-items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="profile-image-container">
                <img src={Profile} alt="Avishka Wijesinghe" className="img-fluid profile-image" />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
