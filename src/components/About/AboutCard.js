import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name is <span className="purple">Aeman Alobaidi</span> {" "}
            and currently I'm based in <span className="purple">Hamilton, Ontario.</span>
            <br />I am a new graduate from <span className="purple">University of Guelph</span> with a Bachelor of Computing (BCG).
            <br />
            I have studied subjects related to <span className="purple">Computer Science</span>, <span className="purple">Software Engineering</span> and <span className="purple">Math</span>.
            <br />
            Apart from <span className="purple">coding</span>, some other activities that I love to do!
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
