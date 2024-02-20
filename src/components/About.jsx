import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
// import userImg from "../assets/images/dp-goggle-black.png";
import userImg from "../assets/images/dp-goggle-black.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import github from "../assets/images/github.png";
import google from "../assets/images/google.png";
import gmail from "../assets/images/gmail.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <Container className="about-me-container">
      <h2 className="about-me-h">About Me</h2>
      <hr />
      <Row className="about-me-row">
        <Col md={5} sm={12} className="about-me-details">
          <Image src={userImg} className="user-image" />
          <h2 className="user-name">Durgesh Pandey</h2>
          <span className="user-email">
            {/* <i class="bi bi-envelope-at-fill"></i>  */}
            <img src={gmail} alt="" /> durgesheemails@gmail.com
          </span>
        </Col>
        <Col md={7} sm={12} className="about-me-description">
          <div className="description">
            <p>
              Welcome to my portfolio website! I'm Durgesh Pandey, Upskilling
              with Java Sprinboot based Application Development.
            </p>

            <p>
              During 2 years of Infosys Experience I have learned and gained
              hand's-on experience to honing my skills in Java, Microservices,
              Cloud Computing and Frontend Development [HTML, CSS, JavaScript,
              ReactJS]. I love to Explore New Technologies and Learn it.
            </p>

            <p>
              Feel free to explore my portfolio and get in touch with me for any
              opportunities or collaborations.
            </p>
          </div>
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
    </Container>
  );
};

export default About;
