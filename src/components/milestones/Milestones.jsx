import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaBriefcase, FaSchool } from 'react-icons/fa';
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
        'Pursuing BSc (Hons) in Software Engineering at NSBM Green University, Lakshan Rukantha focuses on mastering front-end and back-end technologies while building a strong emphasis on key software development principles.',
      icon: <FaGraduationCap />,
    },
    {
      date: 'October, 2020',
      title: 'G.C.E. (A/L) Examination',
      company: 'V/ Agrabodhi M.V',
      description:
        'Passed the Sri Lankan Advanced Level (A/L) Examination, a qualification equivalent to Cambridge A-Levels.',
      icon: <FaSchool />,
    },
    {
      date: 'December, 2017',
      title: 'G.C.E. (O/L) Examination',
      company: 'V/ Agrabodhi M.V',
      description:
        'Completed the Sri Lankan Ordinary Level (O/L) Examination, signifying completion of secondary education.',
      icon: <FaSchool />,
    },
  ];

  return (
    <section className="milestones">
      <Container>
        <div className='milestones-section-heading'>
        <h2 className="milestones-heading text-center">Special Milestones</h2>
        </div>
        
        <div className="timeline">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`timeline-container ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className= {`content ${index % 2 === 0 ? 'left' : 'right'}`}>
                <span className="icon">{milestone.icon}</span>
                <h6>{milestone.title}</h6>
                <small className="text-muted">{milestone.company}</small>
                <p className="description">{milestone.description}</p>
                <span className="date">{milestone.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Milestones;

