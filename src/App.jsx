import React from 'react';

import Hero from './components/hero/Hero';
import AboutMe from './components/about/AboutMe';
import CustomNavbar from './components/navbar/Navbar';
import Milestones from './components/milestones/Milestones';
import Skill from './components/skill/Skill';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Hero />
      <AboutMe/>
      <Skill/>
      <Projects/>
      <Milestones/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;