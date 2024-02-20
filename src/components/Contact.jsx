// ContactPage.js
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";
import contactImg from "../assets/images/contact-img.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import github from "../assets/images/github.png";
import google from "../assets/images/google.png";

const Contact = () => {
  return (
    <Container className="contact-container">
      <Row className="contact-header">
        <Col md={6} sm={12}>
          {/* <h2>Get in Touch</h2> */}
        </Col>
        {/* Social Links */}
        <Col
          md={6}
          sm={12}
          className="social-links d-flex justify-content-center"
        >
          <a href="#" className="link">
            {/* <i class="bi bi-github"></i> */}
            <img src={github} alt="" />
          </a>
          <a href="#" className="link">
            {/* <i className="bi bi-linkedin"></i> */}
            <img src={linkedin} alt="" />
          </a>
          <a href="#" className="link">
            {/* <i class="bi bi-google"></i> */}
            <img src={google} alt="" />
          </a>
          <a href="#" className="link">
            {/* <i class="bi bi-twitter"></i> */}
            <img src={twitter} alt="" />
          </a>
        </Col>
      </Row>
      <hr />
      <Row className="contact-row">
        <Col sm={12} md={6}>
          <Image src={contactImg} />
        </Col>
        {/* Contact Form Column */}
        <Col sm={12} md={6}>
          <Card className="contact-card">
            <Card.Body>
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Control type="Name" placeholder="Enter your name" />
                  </Form.Group>

                  {/* <Form.Group as={Col}>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </Form.Group> */}
                </Row>

                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="warning" type="submit">
                    Send
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
