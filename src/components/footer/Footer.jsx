import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
// import footerBackground from '../assets/footer-background.png'; // Replace with your actual background image path

const Footer = () => {
  return (
      
    <footer className="footer-section">
      <Container className="py-5">
        <Row className="py-5 footer-container">
          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#milestones" className="footer-link">Milestones</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={4} sm={6} className="mb-4">
            <h5 className="footer-title">Support</h5>
            <ul className="list-unstyled">
              <li><a href="#terms" className="footer-link">Terms & Conditions</a></li>
              <li><a href="#privacy" className="footer-link">Privacy</a></li>
              <li><a href="#cookie" className="footer-link">Cookie preferences</a></li>
            </ul>
          </Col>

          {/* Get in Touch */}
          <Col md={4} sm={12} className="mb-4">
            <h5 className="footer-title">Get in touch</h5>
            <div className="social-icons">
              <a href="https://github.com/WMAPraveen" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <i className="bi bi-github social-icon"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <i className="bi bi-twitter social-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/avishka-wijesinghe/" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <i className="bi bi-linkedin social-icon"></i>
              </a>
              <a href="https://web.facebook.com/avishka.wijesinghe.02" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <i className="bi bi-facebook social-icon"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center py-3">
            <p className="copyright-text">
              Copyright © 2020-2025 | All rights reserved. Made with{' '} by Avishka Wijesinghe
            </p>
          </Col>
        </Row>
      </Container>

      {/* Back to Top Button */}
      <Button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </Button>
    </footer>
   
  );
};

export default Footer;