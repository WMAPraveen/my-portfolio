import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import './Skill.css';

//Replace these with actual image imports or SVGs
import mongoDBIcon from '../../assets/Icons/mongodb.png';
import mysqlIcon from '../../assets/Icons/mysql.png';
import reactIcon from '../../assets/Icons/react.png';
import nodeIcon from '../../assets/Icons/node.webp';
import JavascriptIcon from '../../assets/Icons/javascript.webp';
import pythonIcon from '../../assets/Icons/python.png';
import javaIcon from '../../assets/Icons/java.webp';
import SpringBootIcon from '../../assets/Icons/sprinboot.png';
import htmlIcon from '../../assets/Icons/html.png';
import cssIcon from '../../assets/Icons/css.webp';

const skillsData = [
  { name: 'MongoDB', icon: mongoDBIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'React.js', icon: reactIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'JavaScript', icon: JavascriptIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'JAVA', icon: javaIcon },
  { name: 'Sprin Boot', icon: SpringBootIcon },
  { name: 'HTML', icon: htmlIcon },
  { name: 'CSS', icon: cssIcon },
];

const Skill = () => {
  return (
   <section className="skills-section py-5">
  
    <Container>
      <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  >
      <div className='skill-section-headding'>
        <h2 className=" skill-headding mb-5 poppins">Skills</h2>
      </div>
</motion.div>
<motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
  >
      <div className='program-section-headding'>
        <h2 className=" program-headding mb-5 poppins-semibold">Programming Skills</h2>
      </div>

      <Row className="justify-content-center">
        {skillsData.map((skill, index) => (
          <Col xs={6} sm={4} md={3} lg={2} key={index} className="skill-item text-center mb-4">
            <div className="skill-icon-container">
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
            </div>
            <p className="skill-name text-white mt-2">{skill.name}</p>
          </Col>
        ))}
      </Row>
      </motion.div>
    </Container>
  {/* </motion.div> */}
</section>
  );
};

export default Skill;