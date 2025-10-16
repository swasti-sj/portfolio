import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import SpinningGradient from "../gradient";

// Replace with your Google Drive direct download link
const pdfLink = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row
        style={{
          justifyContent: "center",
          position: "relative",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "white" }}>
          👋 Have a look at my <span className="purple">Resume</span> below!
        </h2>

        <SpinningGradient className="sg-fixed-size" >
          <Button
            variant="primary"
            href={pdfLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload /> &nbsp;Download CV
          </Button>
        </SpinningGradient>
      </Row>
    </Container>
  );
}

export default ResumeNew;
