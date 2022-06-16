import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiAndroid,
  DiGit,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiWireshark,
} from "react-icons/si";
import {
  FaJava,
} from "react-icons/fa";
import {Link} from 'react-router-dom'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.java.com/', '_blank')}>
        <FaJava  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.javascript.com/', '_blank')}>
        <DiJavascript1  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.nodejs.org/en/', '_blank')}>
        <DiNodejs  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.reactjs.org/', '_blank')}>
        <DiReact  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.expressjs.com/', '_blank')}>
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.mongodb.com/', '_blank')}>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.firebase.google.com/', '_blank')}>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.github.com/WereWolfx01', '_blank')}>
        <DiGit  />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.wireshark.org/', '_blank')}>
        <SiWireshark />
      </Col>  
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.kotlinlang.org/', '_blank')}>
        <DiAndroid />
      </Col>
    </Row>
  );
}

export default Techstack;
