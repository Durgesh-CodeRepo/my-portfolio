// Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import github from "../assets/images/github.png";
import google from "../assets/images/google.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="curve-top"></div>
      <Container>
        <Row>
          {/* Column 1: Links */}
          <Col sm={12} md={6}>
            <Link className="link" to="/home">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </Col>
          {/* Column 2: Social Links */}
          <Col sm={12} md={6}>
            <div className="social-links">
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
            </div>
          </Col>
        </Row>
        <Row
          className="text-center"
          style={{ fontWeight: "bold", marginTop: "5rem" }}
        >
          <Col md={12}>Copyright &copy; My portfolio</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
