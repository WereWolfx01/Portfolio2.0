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
              Hi this is Aeman, I fell in love with programming when I was first intoduced to 
              video games and being able to make stuff happen (INFINITE HEALTH + AMMO) ... 🤫 
              <br />
              <br />
              Years later, I now hold a degree in
              <i>
                <b className="purple"> Computing </b> from <b className="purple">University of Guelph.</b> 
              </i>
              <br />
              <br />I am proficient in classics like
              <i>
                <b className="purple"> C/C++, Javascript and Java. </b>
              </i>
              <br />
              <br />
              My field of Interest is working on current&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also I like to {" "}
                <b className="purple">
                keep learning, continue challenging myself, and build intersting projects.
                </b>
              </i>
              <br />
              <br />
              I am passionate in becoming a full-time software developer. I have experience in
              <b className="purple"> Front-end and Back-end development.</b>
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
