import React from "react";
import { Row,
    Col,
    Words,
  } from "arwes";

import {
Link
} from "react-router-dom";

export default function MainMenu() {
    return (
    <Row>
    <Col
        s={12}
        m={8}
        l={6}
        offset={["m2", "l3"]}
        className="centerContent"
    >
        <h1>
        <Words animate>Stardust</Words>
        </h1>
        <Link to="/game">Neues Spiel starten</Link>
    </Col>
    </Row>
    )
}