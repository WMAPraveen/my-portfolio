import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Hero.css';
import Profile from '../../assets/profile.png'; 


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
    <section className="hero-section text-white">
      <Container className=''>
        <Row className="align-items-center hero-container">
          <Col xs={12} lg={6} className="text-section ">
            <h1 className="poppins-bold ">
              <span className='hero-title'>Hi, I am</span><br />
              <span className="my-name">Avishka,</span><br />
              <span className="typing-text hero-title">{displayedText}</span>
            </h1>
            <p className="welcome-text mt-4 poppins-semibold">
              Welcome to my portfolio! Avishka Wijesinghe is an Experienced Full Stack Developer with a passion for crafting visually stunning and intuitive web experiences. With a unique blend of technical expertise and creative flair, there is strong confidence in the ability to deliver custom solutions tailored to diverse project requirements.
            </p>
            <div className="mt-4">
              <Button className="me-2 button-full">
                <i className="bi bi-cloud-arrow-down-fill me-2"></i>
                Resume
              </Button>
              <Button className="outline-button">
                <i className="bi bi-envelope-fill me-2"></i>
                Contact Me
              </Button> 
            </div>
          </Col>
          <Col xs={12} lg={6} className="profile-image-section d-flex justify-content-center align-items-center">
            <div className="profile-image-container">
              <img
                 src={Profile}
                alt="Avishka Wijesinghe"
                className="img-fluid profile-image"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;