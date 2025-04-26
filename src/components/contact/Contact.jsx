import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';
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

  return (
    <section className="contact-section d-flex align-items-center justify-content-center">
      <Container className="py-5 contact-container">
        <div className='contact-section-heading'>
        <h2 className="contact-heading text-center mb-2">Contact</h2>
        </div>
       <div className='contact-section-subheading'>
       <h3 className="contact-subtitle text-center mb-4">Call or write <span style={{color: '#08b9b9'}}>anytime</span></h3>
       </div>
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="contact-form-col">
            <div className="form-device-frame">
              <Form onSubmit={handleSubmit} className="contact-form">
                <Form.Group controlId="formFullName" className="mb-2">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder=""
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
                    placeholder=""
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-2">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder=""
                    required
                  />
                </Form.Group>
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
      </Container>
    </section>
  );
};

export default Contact;