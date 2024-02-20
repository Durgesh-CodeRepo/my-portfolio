import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import infyLogo from "../assets/images/infy-logo.png";
import experienceImg from "../assets/images/experience-removebg.png";

const Experience = () => {
  return (
    <Container>
      <div className="experience-section">
        <h2 className="experience-h">Experience</h2>
        <hr />
        <Row className="experience-content">
          <Col sm={12} md={4} className="d-flex justify-content-center">
            <img
              style={{ height: "20rem", width: "25rem" }}
              src={experienceImg}
              alt=""
            />
          </Col>
          <Col sm={12} md={6}>
            <Card>
              <div className="experience-card-section">
                <Card.Body>
                  <div className="experience-card-content">
                    <img
                      className="experience-card-img"
                      src={infyLogo}
                      alt=""
                    />
                    <div
                      className="ex-card-h"
                      style={{
                        color: "#0d0029",
                        paddingLeft: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <h3>Senior System Engineer</h3>
                      <p>from feb 2022 to till now</p>
                    </div>
                  </div>
                  <Card.Text className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quos, dolor. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Experience;
