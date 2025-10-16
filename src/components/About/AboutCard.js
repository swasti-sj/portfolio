import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">

          {/* Introduction */}
          <p style={{ textAlign: "justify", lineHeight: "1.9" }}>
            Hello! I’m <span className="purple">Swasti Jain</span> from{" "}
            <span className="purple">Madhya Pradesh, India</span>. <br />
            I’m currently a pre-final year student at{" "}
            <strong>IIT Dharwad</strong>, passionate about{" "}
            <strong>full-stack development</strong> and creating scalable, efficient, and user-friendly web applications.
          </p>

          {/* Education */}
          <h5
            className="purple"
            style={{
              marginTop: "2rem",
              fontWeight: "600",
              borderBottom: "2px solid rgba(155,126,172,0.3)",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            🎓 Education
          </h5>
          <ul style={{ lineHeight: "1.9", marginBottom: "1.4rem", paddingLeft: "1rem" }}>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> Pre-final year <strong>B.Tech</strong> student at{" "}
              <strong>IIT Dharwad (2023–2027)</strong>, pursuing{" "}
              <strong>Computer Science (Minor)</strong> and{" "}
              <strong>Interdisciplinary Sciences (Physics)</strong>. 
              Currently holding a <strong>CPI of 8.25</strong>.
            </li>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> Completed schooling in <strong>2022</strong> under the{" "}
              <strong>CBSE Board</strong>, securing <strong>92%</strong> in Class 12.
            </li>
          </ul>

          {/* Achievements */}
          <h5
            className="purple"
            style={{
              marginTop: "2rem",
              fontWeight: "600",
              borderBottom: "2px solid rgba(155,126,172,0.3)",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            🏆 Achievements
          </h5>
          <ul style={{ lineHeight: "1.9", marginBottom: "1.4rem", paddingLeft: "1rem" }}>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> Ranked in the <strong>top 2% nationally</strong> in{" "}
              <strong>JEE-Advanced 2023</strong>.
            </li>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> <strong>Gold Medalist</strong> in the{" "}
              <strong>International Mathematics Olympiad (IMO)</strong>.
            </li>
          </ul>

          {/* Interests */}
          <h5
            className="purple"
            style={{
              marginTop: "2rem",
              fontWeight: "600",
              borderBottom: "2px solid rgba(155,126,172,0.3)",
              display: "inline-block",
              paddingBottom: "4px",
            }}
          >
            🎯 Interests
          </h5>
          <ul style={{ lineHeight: "1.9", marginBottom: "1.4rem", paddingLeft: "1rem" }}>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> 💹 Exploring <strong>financial markets</strong> and 
              understanding how investments and economies work fascinates me.
            </li>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> 🏏🛼 Staying active through{" "}
              <strong>roller skating</strong> and <strong>cricket</strong> keeps me 
              energized — I’ve proudly competed in{" "}
              <strong>Inter-IIT meets</strong> and{" "}
              <strong>state-level tournaments</strong>.
            </li>
            <li className="about-activity" style={{ marginBottom: "0.6rem" }}>
              <ImPointRight /> 📸 Capturing moments through{" "}
              <strong>photography</strong> and experimenting with{" "}
              <strong>cinematography</strong> is my favorite creative outlet.
            </li>
          </ul>

          {/* Quote */}
          <p
            style={{
              color: "rgb(155 126 172)",
              marginTop: "2rem",
              fontStyle: "italic",
              lineHeight: "1.7",
            }}
          >
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer" style={{ marginTop: "0.5rem" }}>
            Swasti Jain
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
