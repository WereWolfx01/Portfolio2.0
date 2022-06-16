import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aeman Alobaidi</span> {" "}
            currently based in <span className="purple">Hamilton, Ontario.</span>
            <br />I am a new graduate from University of Guelph with a Bachelor of Computing (BCG).
            <br />
            I have studied subjects related to Computer Science, Software Engineering and Math.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Martial Arts/Jiu Jitsu
            </li>
            <li className="about-activity">
              <ImPointRight /> Puzzles & Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Outdoors & Nature
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Fun Fact: Equal is Not Always Equal in Javascript{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
