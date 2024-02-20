import React from "react";
import { Card } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Card className="project-card">
      <Card.Img
        variant="top"
        src={project.imageSrc}
        className="project-card-img"
      />
      <Card.Title className="project-card-title">{project.name}</Card.Title>
      <Card.Body className="project-card-body">
        <Card.Text className="project-card-text">
          {project.description}
          <div className="project-card-buttons">
            <a href={project.codeLink} target="blank">
              <button className="btn btn-warning">Code</button>
            </a>
            <a href={project.previewLink} target="blank">
              <button className="btn btn-warning">Preview</button>
            </a>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
