import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view mb-4">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
{props.organization && (
          <Card.Subtitle style={{ color: "#f5d547", fontWeight: "500" }}>
            {props.organization}
          </Card.Subtitle>
        )}
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>

        {/* GitHub / Blog button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo / Website button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
