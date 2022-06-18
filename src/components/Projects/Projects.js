import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import chatbox from "../../Assets/Projects/chatbox.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="My personal Portfolio website which features some of my github projects as well as my resume and technical skills. This project was Built using React.js Node.js, Express.js, CSS3, VsCode, Netlify"
              link="https://github.com/WereWolfx01/Portfolio2.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbox}
              isBlog={false}
              title="CHATBOX"
              description="Realtime chat app with react, node.js and socket.io with mongodb and express, and styled-componenets."
              link="https://github.com/WereWolfx01/chatbox"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
