// Skills.js
import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import skillImg from "../assets/images/skill-bg-img.png";
import { skillsData } from "../data/myData";

const Skills = () => {
  const [filter, setFilter] = useState("all");

  const filterSkills = (category) => {
    setFilter(category);
  };

  const filteredSkills =
    filter === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === filter);

  return (
    <Container className="skill-section">
      <h2 className="skill-h">Skills</h2>
      <hr />
      <Row className="skill-row">
        <Col md={6} sm={12} className="my-4">
          <div className="skills-buttons">
            <Button
              className="btn btn-warning"
              onClick={() => filterSkills("all")}
            >
              All
            </Button>
            <Button
              className="btn btn-warning"
              onClick={() => filterSkills("frontend")}
            >
              Frontend
            </Button>
            <Button
              className="btn btn-warning"
              onClick={() => filterSkills("backend")}
            >
              Backend
            </Button>
            <Button
              className="btn btn-warning"
              onClick={() => filterSkills("other")}
            >
              Other
            </Button>
          </div>
          <TransitionGroup className="skills-list">
            {filteredSkills.map((skill, index) => (
              <CSSTransition key={index} timeout={500} classNames="item">
                <div className="skills-list">
                  <div className="skill-item">
                    <img src={skill.image} className="skill-item-img" alt="" />
                    {skill.name}
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Col>
        <Col md={6} sm={12} className="d-flex justify-content-center">
          <Image src={skillImg} alt="Skill Image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
