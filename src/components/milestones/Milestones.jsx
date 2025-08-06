import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaSchool } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Milestones.css';

const Milestones = () => {
  const milestones = [
    // { 
    //   date: '13th February, 2024',
    //   title: 'Full Stack Developer',
    //   company: 'HashX',
    //   description:
    //     "HashX is dedicated to offering robust cybersecurity capabilities, safeguarding digital assets with advanced technology. Moreover, HashX proudly presents Sri Lanka's No #1 CTF platform, providing a space to host competitive inter university CTF competitions.",
    //   icon: <FaBriefcase />,
    // },
    {
      date: '13th October, 2022',
      title: 'BSc (Hons) in Software Engineering (Undergraduate)',
      company: 'NSBM Green University',
      description:
        'Began undergraduate studies in Software Engineering at NSBM Green University. Focused on both front-end and back-end technologies while learning essential software engineering principles and industry practices.',
      icon: <FaGraduationCap />,
    },
    {
      date: 'October, 2018',
      title: 'G.C.E. (A/L) Examination',
      company: 'M/Rahula Collage',
      description:
        'Passed the Sri Lankan Advanced Level (A-Level) Examination at Matara Rahula Collage. Focused on Maths stream with subjects including Combined Maths, Chemistry, and Physics.',
      icon: <FaSchool />,
    },
    {
      date: 'December, 2013',
      title: 'G.C.E. (O/L) Examination',
      company: 'M/Rahula Collage',
      description:
        'Passed the Sri Lankan Ordinary Level (O-Level) Examination at  Matara Rahula Collage. This qualification is equivalent to the Cambridge O-Level and marks the completion of secondary education in Sri Lanka. Conducted by the Ministry of Education.',
      icon: <FaSchool />,
    },
  ];

  return (
    <section id="milestones" className="milestones">
      <Container>
         <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
        <div className='milestones-section-heading'>
        <h2 className="milestones-heading text-center">Special Milestones</h2>
        </div>
        </motion.div>


        {/* <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        > */}
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
              <div className= {`content ${index % 2 === 0 ? 'left' : 'right'}`}>
                <span className="icon">{milestone.icon}</span>
                <h6>{milestone.title}</h6>
                <small className="text-muted">{milestone.company}</small>
                <p className="description">{milestone.description}</p>
                <span className="date">{milestone.date}</span>
              </div>

              </motion.div>

            </div>
          ))}
        </div>
       
      </Container>
    </section>
  );
};

export default Milestones;

