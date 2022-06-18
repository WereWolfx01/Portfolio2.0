import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPowershell,
  SiIntellijidea,
  SiWindows,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.microsoft.com/en-ca/windows?r=1', '_blank')}>
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://visualstudio.microsoft.com/', '_blank')}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.postman.com/', '_blank')}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://www.jetbrains.com/idea/', '_blank')}>
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons" onClick={() => window.open('https://docs.microsoft.com/en-us/powershell/', '_blank')}>
        <SiPowershell />
      </Col>
    </Row>
  );
}

export default Toolstack;
