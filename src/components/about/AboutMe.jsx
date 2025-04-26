import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <Container className="py-5 about-me-section">
      {/* Vertical line above title */}
      <div className="about-section-heading">
        <h2 className="text-center  about-heading">About Me</h2> 
      </div>

      <Row >
        {/* Left Section */}
        <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <div className="d-flex align-items-center mb-4 about-text justify-content-center">
            <div className="me-3">
              <FaBriefcase size={40} color="#08b9b9" />
            </div>
            <div>
              <h1 className="display-4 fw-bold">2 YEARS JOB</h1>
              <h1 className="display-4 fw-bold">EXPERIENCE</h1>
            </div>
          </div>

          <div className="d-flex align-items-center about-text justify-content-center">
            <div className="me-3">
              <FaProjectDiagram size={40} color="#08b9b9" />
            </div>
            <div>
              <h1 className="display-4 fw-bold">8+ PROJECTS</h1>
              <h1 className="display-4 fw-bold">COMPLETED</h1>
            </div>
          </div>
        </Col>

        {/* Right Section */}
        <Col md={6} className="text-center text-md-start">
          <div>
            <h1 className="display-4 fw-bold" style={{ marginBottom: '0px' }}>WHAT ARE MY</h1>
            <h1 className="display-4 fw-bold" style={{ color: '#08b9b9', marginBottom: '0px' }}>
              strongest sides
            </h1>
            <h1 className="display-4 fw-bold">AND SKILLS?</h1>
          </div>
          <p className="mt-3" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>

            One of my strongest qualities as a full stack developer is my
            ability to think critically and solve problems. I excel at
            breaking down complex projects into manageable chunks and
            coming up with innovative solutions to problems that arise. I
            am also very organized and detail-oriented, which allows me to
            complete assignments on time and to the highest standards.

          </p>
          <p className="mt-3" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>


            As a full stack developer, I am proficient in a variety of
            programming languages and frameworks, including HTML, CSS,
            JavaScript, and Python. I have experience working with popular
            technologies such as MongoDB, Express, React, and Node.js, and
            am skilled in UI/UX development as well as I have the ability
            to quickly adapt to new technologies and frameworks. I have a
            wide range of knowledge about technologies beyond those
            mentioned.


          </p>

          <p className="mt-3" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>



            I am also a strong communicator and able to effectively
            collaborate with clients and team members to understand their
            needs and translate them into functional specifications.
            Overall, I am confident in my ability to deliver high-quality
            web solutions that meet the needs of my clients and exceed
            their expectations.



          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
