import React from 'react';
import './Projects.css'; // Custom CSS for styling
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import project1 from '../../assets/Projects/ScreenShot 1.jpeg'
import project2 from '../../assets/Projects/ScreenShot 2.jpeg'
import project3 from '../../assets/Projects/ScreenShot 3.png'
import project4 from '../../assets/Projects/ScreenShot 4.jpeg'

const Projects = () => {
  const cards = [
    { title: 'Online Auction Web Application',  image: project1 , link:'' },
    { title: 'Nike Demo Website', image: project2 , link:'' },
    { title: 'Flex Ride Car Rental Mobile App',  image: project3, link:'https://github.com/WMAPraveen/Flex-Ride.git' },
    { title: 'Portfolio Website',  image: project4, link:'https://github.com/WMAPraveen/my-portfolio.git' },
  ];

  // Group cards into sets of 3 (for structure, but we'll scroll all)
  const cardGroups = [];
  for (let i = 0; i < cards.length; i += 3) {
    cardGroups.push(cards.slice(i, i + 3));
  }

  return (
    <section id="projects" className="card-carousel-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='project-section-headding'>
            <h2 className=" project-headding mb-5 poppins">Projects</h2>
          </div>
        </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >

        <div className="carousel-wrapper">
          <div className="d-flex justify-content-center continuous-scroll">
            {cards.concat(cards).map((card, index) => ( // Duplicate cards for seamless looping
              <div className="carousel-card" key={index}>
                <img className="d-block w-100 project-image" src={card.image} alt={card.title} />
                <div className="card-body">
                  <h3>{card.title}</h3>
                <Button href={card.link} className="button-full btn-project">
                  Source Code
                </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;