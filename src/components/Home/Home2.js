import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Iraqi-Canadian full-stack developer focused on writing code that makes an impact on users.
              <br />
              <br />
              I graduated with a degree in
              <i>
                <b className="purple"> Computer and Information Science </b> from <b className="purple">University of Guelph.</b> 
              </i>
              <br />
              <br />I am proficient in classics like
              <i>
                <b className="purple"> C/C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interests are working on current&nbsp;
              <i>
                <b className="purple">Web Technologies </b>and <b className="purple">Create Software Products. </b>
              <br />
              <br />
                I'm currently learning <b className="purple">Full Stack Development,</b> and I like to {" "}
                  continue challenging myself, learn new languages and problem solving techniques.
              </i>
              <br />
              <br />
              My goal is to become a full-time software developer. I have experience working for a {" "}
              <b className="purple">telecommunications provider</b> providing technical adviseto customers and solving real life problems.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/WereWolfx01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aeman-abdulmuhssen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayman.alobaidi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
