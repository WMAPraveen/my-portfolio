import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skill.css';

// Replace these with actual image imports or SVGs
// import mongoDBIcon from '../assets/mongodb.png'; // Replace with your icon path
// import expressIcon from '../assets/express.png';
// import reactIcon from '../assets/react.png';
// import nodeIcon from '../assets/node.png';
// import jsIcon from '../assets/javascript.png';
// import pythonIcon from '../assets/python.png';
// import nextIcon from '../assets/nextjs.png';
// import tsIcon from '../assets/typescript.png';
// import htmlIcon from '../assets/html.png';
// import cssIcon from '../assets/css.png';

const skillsData = [
  { name: 'MongoDB' },
  { name: 'Express.js' },
  { name: 'React.js' },
  { name: 'Node.js' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'Next.js' },
  { name: 'TypeScript'},
  { name: 'HTML' },
  { name: 'CSS' },
];

const Skill = () => {
  return (
    <section className="skills-section py-5">
      <Container>
      <div className='skill-section-headding'>
        <h2 className=" skill-headding mb-5 poppins">Skills</h2>
        </div>

        <div className='program-section-headding'>
        <h2 className=" program-headding mb-5 poppins-semibold">Programming Skills</h2>
        </div>
        
        <Row className="justify-content-center">
          {skillsData.map((skill, index) => (
            <Col xs={6} sm={4} md={3} lg={2} key={index} className="skill-item text-center mb-4">
              <div className="skill-icon-container">
                {/* <img src={skill.icon} alt={skill.name} className="skill-icon" /> */}
              </div>
              <p className="skill-name text-white mt-2">{skill.name}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skill;