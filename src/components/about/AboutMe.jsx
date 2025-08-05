import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from '../../assets/aboutImg.png';
import './AboutMe.css';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <Container className="py-5 about-me-section">
      {/* Vertical line above title */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="about-section-heading">
          <h2 className="text-center  about-heading">About Me</h2>
        </div>
      </motion.div>
      <Row >

        {/* Left Section */}
        <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>

            </div>

          </motion.div>
        </Col>

        {/* Right Section */}
        <Col md={6} className="text-center text-md-start">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div>
              <h1 className="display-4 fw-bold" style={{ marginBottom: '0px' }}>WHAT ARE MY</h1>
              <h1 className="display-4 fw-bold" style={{ color: '#4e0c04', marginBottom: '0px' }}>
                strongest sides
              </h1>
              <h1 className="display-4 fw-bold">AND SKILLS?</h1>
            </div>
            <div>
              <p className="mt-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>

                I am a passionate software engineering undergraduate with a strong interest in building innovative web applications and digital experiences.

              </p>
              <p className="mt-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>


                My journey in the world of programming began when I was in high school, and since then, I have been continuously learning and adapting to new technologies.


              </p>

              <p className="mt-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>


                I believe in creating solutions that are not only functionally robust but also visually appealing and user-friendly.


              </p>
            </div>
            <div className='d-flex justify-content-around'>
              <div >
                {/* <div className="me-3">
                  <FaBriefcase size={30} color="#08b9b9" />
                </div> */}
                <div className='d-flex flex-column align-items-center'>
                  <h1 className="display-4 fw-bold">2+</h1>
                  <h1 className="display-1 fw-bold">Years Experience</h1>
                </div>
              </div>

              <div >
                {/* <div className="me-3">
                  <FaProjectDiagram size={30} color="#08b9b9" />
                </div> */}
                <div className='d-flex flex-column align-items-center'>
                  <h1 className="display-4 fw-bold">4+</h1>
                  <h1 className="display-1 fw-bold">Project Completed</h1>
                </div>
              </div> 

              <div >
                {/* <div className="me-3">
                  <FaProjectDiagram size={30} color="#08b9b9" />
                </div> */}
                <div className='d-flex flex-column align-items-center'>
                  <h1 className="display-4 fw-bold">5+</h1>
                  <h1 className="display-1 fw-bold">Technologies Mastered</h1>
                </div>
              </div>
            </div>

          </motion.div>
        </Col>

      </Row>

    </Container>
  );
};

export default AboutMe;
