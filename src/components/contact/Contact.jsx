import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
import { motion } from 'framer-motion';
import contactIllustration from '../../assets/contact-illustration.png'; // Replace with your actual illustration path

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
    setFormData({ fullName: '', email: '', message: '' });
  };
  const MySwal = withReactContent(Swal);

  return (
    <section className="contact-section d-flex align-items-center justify-content-center">
      <Container className="py-5 contact-container">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className='contact-section-heading'>
            <h2 className="contact-heading text-center mb-2">Contact</h2>
          </div>
          <div className='contact-section-subheading'>
            <h3 className="contact-subtitle text-center mb-4">Call or write <span style={{ color: '#4e0c04' }}>anytime</span></h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >

          <Row className="justify-content-center align-items-center">

            <Col md={6} className="contact-form-col">
              <div className="form-device-frame">
                <form
                  action="https://formsubmit.co/avishkapraveen02@gmail.com"
                  method="POST"
                  className="contact-form"
                  onSubmit={() => {
                    setTimeout(() => {
                      MySwal.fire({
                        title: <strong>Thank you!</strong>,
                        html: <i>Your message has been successfully sent.</i>,
                        icon: 'success',
                        confirmButtonColor: '#8f2d22',
                        confirmButtonText: 'Close',
                        background: 'linear-gradient(135deg, #140402 0%, #0a0201 50%, #200c02 100%)',
                      });
                    }, 500);
                  }}

                >
                  <Form.Group controlId="formFullName" className="mb-2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" required />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-2">
                    <Form.Label>E-Mail Address</Form.Label>
                    <Form.Control type="email" name="email" required />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-2">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={4} required />
                  </Form.Group>

                  {/* Hidden Inputs for customization */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New message from portfolio site!" />
                  <input type="hidden" name="_template" value="box" />

                  <Button type="submit" className="send-button-full">
                    <i className="bi bi-send-fill me-2"></i> Send Message
                  </Button>
                </form>

              </div>
            </Col>


            <Col md={6} className="contact-illustration d-none d-md-block">
              <img
                src={contactIllustration}
                alt="Contact Illustration"
                className="img-fluid"
              />
            </Col>

          </Row>
        </motion.div>
      </Container>
    </section >
  );
};

export default Contact;