import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Projects.css';

const projects = [ 
  {
    title: 'SysInfo',
    description: 'SysInfo is a web-based terminal emulator which you can run basic commands like clear, battery, weather and etc.',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/sysinfo',
    demo: 'https://sysinfo-demo.com',
  },
  {
    title: 'Portfolio',
    description: 'A personal portfolio showcasing my skills, projects, and milestones with a modern design.',
    techStack: ['React', 'Bootstrap', 'CSS'],
    sourceCode: 'https://github.com/portfolio',
    demo: 'https://portfolio-demo.com',
  },
  {
    title: 'E-Shop',
    description: 'An e-commerce platform with product listings, cart functionality, and secure checkout.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    sourceCode: 'https://github.com/eshop',
    demo: 'https://eshop-demo.com',
  },
];

const ProjectSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 30 seconds
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 20000); // 30,000 ms = 30 seconds

    // Clean up the interval on component unmount or when user interacts
    return () => clearInterval(autoSlide);
  }, [currentIndex]); // Reset timer on user interaction (index change)

  return (
    <section className="project-slider-section">
      <Container>
        <div className='project-slider-section-heading'>
        <h2 className="project-slider-heading text-center">Special Milestones</h2>
        </div>
        <div className="slider-wrapper">
          <Button className="nav-arrow left-arrow" onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </Button>

          <div className="slider-container">
            {projects.map((project, index) => {
              const offset = index - currentIndex;
              const angle = offset * 60; // Adjust angle for cylindrical effect
              const zTranslate = Math.abs(offset) * -100; // Push cards back in z-space
              const opacity = 1 - Math.abs(offset) * 0.3; // Fade cards as they move away

              return (
                <div
                  key={index}
                  className="project-card"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(300px) translateZ(${zTranslate}px)`,
                    opacity: opacity,
                    zIndex: projects.length - Math.abs(offset),
                  }}
                >
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    <Button
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="source-code-btn"
                    >
                      Source Code
                    </Button>
                    <Button
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-demo-btn"
                    >
                      View Demo
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <Button className="nav-arrow right-arrow" onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </Button>
        </div>

        {/* Navigation Dots */}
        <div className="nav-dots text-center mt-4">
          {projects.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectSlider;