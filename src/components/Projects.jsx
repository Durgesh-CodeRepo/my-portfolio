import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import { projects } from "../data/myData"; // Assuming you have a data file with project details

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filterProjects = (category) => {
    setFilter(category);
  };

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);
  return (
    <Container>
      <div className="project-section">
        <Row className="project-header">
          <Col md={6} sm={12}>
            <h2>Projects</h2>
          </Col>
          <Col md={6} sm={12} className="d-flex justify-content-center py-4">
            <div className="project-buttons">
              <Button
                className="btn btn-warning"
                onClick={() => filterProjects("all")}
              >
                All
              </Button>
              <Button
                className="btn btn-warning"
                onClick={() => filterProjects("frontend")}
              >
                Frontend
              </Button>
              <Button
                className="btn btn-warning"
                onClick={() => filterProjects("backend")}
              >
                Backend
              </Button>
            </div>
          </Col>
        </Row>
        <hr />
        <Row className="project-row">
          {filteredProjects.map((project, index) => (
            <Col key={index} md={4} sm={12}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Projects;
