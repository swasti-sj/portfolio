import React from "react";
import Particle from "../Particle";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import myImg from "../../Assets/a.jpg";
import "../../style.css"; // <-- make sure to create and import this CSS file

function Contact() {
  return (
    <Container fluid className="contact-about-section" id="contact">
      <Particle />
      <Container>
        <Row>
          {/* Left side */}
          <Col md={7} className="contact-about-description">
            <h1 className="contact-heading">
              Get In <span className="yellow">Touch</span>
            </h1>
            <p className="contact-about-body">
              I’m always open to discussing new projects, collaborations, or
              opportunities to work together.
              <br />
              <br />
              Feel free to send me a message — I’ll get back to you as soon as possible!
            </p>

            {/* Contact details */}
            <div className="contact-details mb-4">
              <p>
                <FaPhoneAlt className="yellow" /> <b>Mobile:</b> +91 9301560787
              </p>
             <p>
  <b>Email:</b>{" "}
  <a href="mailto:jainswasti2004@gmail.com" className="about-email">
    jainswasti2004@gmail.com
  </a>
  <br />
  <a href="mailto:is23bm032@iiitd.ac.in" className="about-email">
    is23bm032@iiitd.ac.in
  </a>
</p>

            </div>

           <div className="contact-about-social mt-4">
              <h1 className="contact-heading"><span className="purple">Connect</span> with <span className="yellow">Me</span></h1>
              <div className ="all-social-links">
              <div className="social-card">
                <AiFillGithub className="social-icon purple" />
                <a
                  href="https://github.com/swasti-sj"
                  target="_blank"
                  rel="noreferrer"
                  className="social-text"
                >
                  github.com/yourusername
                </a>
              </div>

              <div className="social-card">
                <FaLinkedinIn className="social-icon purple" />
                <a
                  href="https://www.linkedin.com/in/swasti-jain-27300628a"
                  target="_blank"
                  rel="noreferrer"
                  className="social-text"
                >
                  linkedin.com/in/swasti-jain-27300628a
                </a>
              </div>

              <div className="social-card">
                <AiOutlineMail className="social-icon purple" />
                <a
                  href="mailto:is23bm032@iitdh.ac.in"
                  className="social-text"
                >
                  is23bm032@iitdh.ac.in
                </a>
              </div>

               <div className="social-card">
                <AiOutlineMail className="social-icon purple" />
                <a
                  href="mailto:jainswasti2004@gmail.com"
                  className="social-text"
                >
                  jainswasti2004@gmail.com
                </a>
              </div>

              <div className="social-card">
                <AiFillInstagram className="social-icon purple" />
                <a
                  href="https://www.instagram.com/swasti_sj"
                  target="_blank"
                  rel="noreferrer"
                  className="social-text"
                >
                  instagram.com/swasti_sj
                </a>
              </div>
              </div>
            </div>
          </Col>
    
          {/* Right side */}
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="contact avatar"  style={{ width: "300px", borderRadius: "40px" }} />
            </Tilt>


          {/* Contact form */}
          <div className="contact-form-container">
            <h1 className="contact-heading">Contact Form</h1>
            <Form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="contact-form"
            >
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Your Email" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
