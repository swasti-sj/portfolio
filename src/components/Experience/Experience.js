import Particle from "../Particle";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        {/* Experience Section */}
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my professional experiences and internships.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ExperienceCard
              title="Web Development Intern"
              organization={<span style={{ color: "#ffdd57" }}>Dept. of CSE, IIT Dharwad</span>}
              period="Apr 2025 – Jul 2025"
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Modernized the departmental website for 500+ students and faculty, enhancing accessibility by 35% and reducing page load times by 40%, following best practices for usability and responsive design.</li>
                  <li>Implemented a CI/CD pipeline and deployed updates on cloud hosting platforms, ensuring scalability, reliability, and seamless maintenance.</li>
                  <li>Developed a responsive frontend using React.js and Tailwind CSS, and integrated with a Node.js & MongoDB backend, automating content updates and reducing manual effort by 60%.</li>
                  <li>Internship guided by Prof. Konjengbam Anand, Assistant Professor, Dept. of Computer Science and Engineering, providing mentorship on full-stack development, best practices, and professional software engineering workflow.</li>
                </ul>
              }
              ghLink="https://github.com/yourusername"
              demoLink="https://cse.iitdh.ac.in"
              isBlog={false}
            />
          </Col>
        </Row>

        {/* Courses & Certifications Section */}
        <h1 className="project-heading mt-5">
          <strong className="purple">Courses</strong> & Certifications
        </h1>
        <p style={{ color: "white" }}>
          Some courses and certifications I have completed.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="Software Engineering Job Simulation"
              organization={<span style={{ color: "#ffdd57" }}>J.P. Morgan (Forage, 2025)</span>}
              period=""
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Worked on building full-stack microservices using Kafka, REST APIs, and DB integration.</li>
                  <li>Gained hands-on experience in designing scalable and maintainable software systems.</li>
                  <li>Learned best practices for debugging, testing, and CI/CD deployment.</li>
                </ul>
              }
              ghLink=""
              demoLink=""
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              title="160-Day DSA Mastering Challenge"
              organization={<span style={{ color: "#ffdd57" }}>GeeksforGeeks (2025)</span>}
              period=""
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Solved 160+ problems on data structures and algorithms, improving problem-solving efficiency.</li>
                  <li>Gained expertise in arrays, strings, linked lists, trees, graphs, dynamic programming, and sorting/searching algorithms.</li>
                  <li>Strengthened ability to write optimized and clean code under time constraints.</li>
                </ul>
              }
              ghLink=""
              demoLink=""
              isBlog={false}
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCard
              title="C/C++ Programming"
              organization={<span style={{ color: "#ffdd57" }}>IIT Dharwad (2023)</span>}
              period=""
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Developed strong foundations in C/C++ programming and object-oriented concepts.</li>
                  <li>Implemented classic data structures (stack, queue, linked list, tree, graph) with hands-on projects.</li>
                  <li>Applied algorithms to solve real-world problems and optimize program performance.</li>
                  <li>Learned debugging, memory management, and code optimization techniques.</li>
                </ul>
              }
              ghLink=""
              demoLink=""
              isBlog={false}
            />
          </Col>
        </Row>

        {/* Positions of Responsibility Section */}
        <h1 className="project-heading mt-5">
          <strong className="purple">Positions</strong> of Responsibility
        </h1>
        <p style={{ color: "white" }}>
          Roles and responsibilities that demonstrate leadership and mentoring.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ExperienceCard
              title="Outreach Member"
              organization={<span style={{ color: "#ffdd57" }}>Institute Innovation Council, IIT Dharwad</span>}
              period=""
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Led outreach for E-Summit, boosting participation by 40% (500+ students/startups).</li>
                  <li>Built 10+ startup and incubator partnerships to enhance innovation ecosystem.</li>
                </ul>
              }
              ghLink=""
              demoLink=""
              isBlog={false}
            />
          </Col>

          <Col md={6} className="project-card">
            <ExperienceCard
              title="Student Mentor"
              organization={<span style={{ color: "#ffdd57" }}>IIT Dharwad Mentorship Program</span>}
              period=""
              description={
                <ul style={{ paddingLeft: "1rem" }}>
                  <li>Mentored 15+ students, improving their academic integration and confidence.</li>
                  <li>Provided guidance on projects, career development, and coding practices.</li>
                </ul>
              }
              ghLink=""
              demoLink=""
              isBlog={false}
            />
          </Col>
          <Col md={6} className="project-card">
  <ExperienceCard
    title="House Captain"
    organization={<span style={{ color: "#ffdd57" }}>Delhi Public School, 2020</span>}
    period=""
    description={
      <ul style={{ paddingLeft: "1rem" }}>
        <li>Led and coordinated a team of students in house activities, events, and competitions.</li>
        <li>Fostered teamwork, discipline, and school spirit among peers.</li>
        <li>Organized cultural, sports, and academic initiatives, ensuring smooth execution.</li>
      </ul>
    }
    ghLink=""
    demoLink=""
    isBlog={false}
  />
</Col>
<Col md={6} className="project-card">
  <ExperienceCard
    title="Council Member"
    organization={<span style={{ color: "#ffdd57" }}>Fo.Cus Photography Club, IIT Dharwad</span>}
    period="2023 – 2024"
    description={
      <ul style={{ paddingLeft: "1rem" }}>
        <li>Managed photography and videography for club events and projects, capturing high-quality visuals.</li>
        <li>Edited videos and images for promotional and archival purposes.</li>
        <li>Handled content management, social media updates, and engagement for the club’s online presence.</li>
        <li>Collaborated with team members to organize events and workshops, fostering creative and technical skills.</li>
      </ul>
    }
    ghLink=""
    demoLink=""
    isBlog={false}
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
