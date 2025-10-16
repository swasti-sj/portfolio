import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiGraphql,
  SiExpress,
} from "react-icons/si";
import { FaCloud, FaBrain, FaCode } from "react-icons/fa";

function Techstack() {
  const iconStyle = { fontSize: "2.8rem", marginBottom: "0.5rem" };
  const labelStyle = { fontSize: "0.9rem", color: "rgba(255,255,255,0.8)" };

  return (
    <div style={{ textAlign: "center" }}>
      {/* Languages */}
      <h5 className="purple" style={{ margin: "2rem 0 1.5rem 0", fontWeight: "600" }}>
        💻 Languages
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 style={iconStyle} />
          <div style={labelStyle}>JavaScript (ES6+)</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython style={iconStyle} />
          <div style={labelStyle}>Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus style={iconStyle} />
          <div style={labelStyle}>C / C++</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava style={iconStyle} />
          <div style={labelStyle}>Java</div>
        </Col>
      </Row>

      {/* Frameworks & Libraries */}
      <h5 className="purple" style={{ margin: "2rem 0 1.5rem 0", fontWeight: "600" }}>
        ⚙️ Frameworks & Libraries
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact style={iconStyle} />
          <div style={labelStyle}>React.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs style={iconStyle} />
          <div style={labelStyle}>Node.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress style={iconStyle} />
          <div style={labelStyle}>Express.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs style={iconStyle} />
          <div style={labelStyle}>Next.js</div>
        </Col>
      </Row>

      {/* Databases & APIs */}
      <h5 className="purple" style={{ margin: "2rem 0 1.5rem 0", fontWeight: "600" }}>
        🗄️ Databases & APIs
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb style={iconStyle} />
          <div style={labelStyle}>MongoDB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql style={iconStyle} />
          <div style={labelStyle}>SQL / PostgreSQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGraphql style={iconStyle} />
          <div style={labelStyle}>GraphQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCode style={iconStyle} />
          <div style={labelStyle}>RESTful APIs</div>
        </Col>
      </Row>

      {/* Concepts */}
      <h5 className="purple" style={{ margin: "2rem 0 1.5rem 0", fontWeight: "600" }}>
        🧠 Core CS Concepts
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaBrain style={iconStyle} />
          <div style={labelStyle}>DSA</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCode style={iconStyle} />
          <div style={labelStyle}>CS Fundamentals</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaBrain style={iconStyle} />
          <div style={labelStyle}>Logic Building</div>
        </Col>
      </Row>

      {/* Tools & Deployment */}
      <h5 className="purple" style={{ margin: "2rem 0 1.5rem 0", fontWeight: "600" }}>
        🧰 Tools & Deployment
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit style={iconStyle} />
          <div style={labelStyle}>Git & GitHub</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaCloud style={iconStyle} />
          <div style={labelStyle}>CI/CD • Vercel • Netlify</div>
        </Col>
      </Row>

      {/* Soft Skills */}
      <h5 className="purple" style={{ margin: "2rem 0 1.5rem 0", fontWeight: "600" }}>
        🤝 Soft Skills
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        <Col xs={12} md={8}>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.8" }}>
            💬 Communication & Collaboration • 🧩 Problem Solving • ✍️ Content Management • 👥 People Management
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
