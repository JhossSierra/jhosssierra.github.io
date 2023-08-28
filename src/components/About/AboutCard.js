import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">José Jiménez </span>
          
            <br />I am a junior developer, learning how to make websites and webapps.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Make music/Playing instruments 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Photograph 📸
            </li>
            <li className="about-activity">
              <ImPointRight /> Videogame development 🎮
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Si puedes imaginarlo, puedes crearlo"{" "}
          </p>
          <footer className="blockquote-footer">Alejandro Taboada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
