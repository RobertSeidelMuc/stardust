import React, { useState } from "react";
import { Button, Row, Col, Words, Frame } from "arwes";

import { Link } from "react-router-dom";

const ButtonFrame = ({ children }) => {
  const [mouseOver, setMouseOver] = useState(false);
  return (
    <Frame
      corners={1}
      animate={true}
      layer={mouseOver ? "control" : "primary"}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {children}
    </Frame>
  );
};

export default function MainMenu() {
  return (
    <Row>
      <Col s={12} m={8} l={6} offset={["m2", "l3"]} className="centerContent">
        <h1>
          <Words animate>Stardust</Words>
        </h1>
        <div>
          <Link to="/game">
            <Button Frame={ButtonFrame} animate className="button">
              Neues Spiel starten
            </Button>
          </Link>
          <Link to="/load">
            <Button Frame={ButtonFrame} animate className="button" disabled>
              Spiel laden
            </Button>
          </Link>
          <Link to="/credits">
            <Button Frame={ButtonFrame} animate className="button" disabled>
              Credits
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}
