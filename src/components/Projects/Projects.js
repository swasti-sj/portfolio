import Particle from "../Particle";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Highlighting projects that showcase my skills in full-stack development, data visualization, and interactive web applications.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Data Visualization Dashboard (Project Site)"
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Developed an interactive dashboard handling 1,000+ records for real-time data visualization and analysis.</li>
                  <li>Engineered Chart.js visualizations for insights and integrated fuzzy search, reducing query times by 50%.</li>
                  <li>Deployed on Vercel Cloud for scalable, high-availability access, enabling data-driven decisions efficiently.</li>
                </ul>
              }
              ghLink="https://github.com/yourusername/data-visualization-dashboard"
              demoLink="https://dashboard.yourdomain.com"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="To-Do List Web App"
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Built a secure To-Do app supporting 100+ concurrent users with JWT-based authentication and encrypted REST APIs.</li>
                  <li>Optimized UI/UX with React.js and Tailwind CSS, boosting user engagement and retention by 30%.</li>
                  <li>Integrated Node.js, Express, and MongoDB backend to ensure smooth CRUD operations and robust task management.</li>
                </ul>
              }
              ghLink="https://github.com/yourusername/todo-app"
              demoLink="https://todoapp.yourdomain.com"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Personal Portfolio Website"
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Designed a fully responsive, high-performance portfolio using React.js, Three.js, Tailwind CSS, and Vite.</li>
                  <li>Implemented 3D interactive animations, enhancing engagement and visual appeal.</li>
                  <li>Achieved a Google Lighthouse performance score improvement from 72 → 96, demonstrating optimization and best practices.</li>
                </ul>
              }
              ghLink="https://github.com/yourusername/personal-portfolio"
              demoLink="https://portfolio.yourdomain.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
