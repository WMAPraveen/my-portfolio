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

  const MySwal = withReactContent(Swal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const form = e.target;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/avishkapraveen02@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Show SweetAlert2 popup
        MySwal.fire({
          title: <strong>Thank you!</strong>,
          html: <i>Your message has been successfully sent.</i>,
          icon: 'success',
          confirmButtonColor: '#8f2d22',
          confirmButtonText: 'Close',
          background: 'linear-gradient(135deg, #140402 0%, #0a0201 50%, #200c02 100%)',
        });

        // Reset form
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        MySwal.fire({
          title: 'Error',
          html: 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonColor: '#8f2d22',
        });
      }
    } catch (error) {
      MySwal.fire({
        title: 'Error',
        html: 'Failed to send message. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#8f2d22',
      });
    }
  };

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
            <h3 className="contact-subitle text-center mb-4">Call or write <span style={{ color: '#4e0c04' }}>anytime</span></h3>
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
                <Form
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <Form.Group controlId="formFullName" className="mb-2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-2">
                    <Form.Label>E-Mail Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-2">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  {/* Hidden Inputs for customization */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New message from portfolio site!" />
                  <input type="hidden" name="_template" value="box" />

                  <Button type="submit" className="send-button-full">
                    <i className="bi bi-send-fill me-2"></i> Send Message
                  </Button>
                </Form>
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
    </section>
  );
};

export default Contact;