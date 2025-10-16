import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Swasti Jain</h3>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/swasti-jain-27300628a"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="mailto:is23bm032@iitdh.ac.in"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <MdEmail />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/swasti_sj"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
