import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/headshot.png";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Wyatt Dronen
                </Card.Title>
                <Card.Text>
                                  Wyatt Dronen is a full stack web developer with a passion for building web applications. 
                                  He specializes in JavaScript technologies like React, Node.js, and MongoDB. 
                                  Wyatt has over 2 years of experience developing web applications for clients and open source projects.
                                  In his free time , he enjoys learning about new technologies and contributing to open source.
                                  Wyatt holds a Full Stack Web Developer certification from University of Minneasota. 
                                  Outside of coding, he likes to play guitar, workout, and hike.  
        
                </Card.Text> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;