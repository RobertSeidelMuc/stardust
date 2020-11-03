import React, { useState } from "react";
import { calculateStarPosition } from "../Star/starHelperFunctions";

import randomize from "../../../calculations/randomize";

import IPlanet from "./IPlanet";

export default function Planet(props: IPlanet) {
  const { screenHeight, starData, gridWidth, gridHeight, planetNumber } = props;
  const [degreesStep] = useState(randomize(70, 90));

  const sizeFactor = 32;
  const diameter = screenHeight / sizeFactor;
  const starDiameter = screenHeight / starData.sizeFactor;
  const orbitRadius = starDiameter * 1.2;
  const starPositionLeft = calculateStarPosition(
    gridWidth,
    starDiameter,
    starData.x,
    starData.column
  );
  const starPositionTop = calculateStarPosition(
    gridHeight,
    starDiameter,
    starData.y,
    starData.row
  );
  const starCenterX = starPositionLeft + diameter / 2;
  const starCenterY = starPositionTop + diameter / 2;

  const radiansStart = starData.planetStartPosition * (Math.PI / 180);
  const radiansStep = degreesStep * (Math.PI / 180);

  const xPosition =
    orbitRadius * Math.cos(radiansStart + radiansStep * (planetNumber - 1));
  const yPosition =
    orbitRadius * Math.sin(radiansStart + radiansStep * (planetNumber - 1));

  return (
    <div
      className="planet"
      style={{
        position: "absolute",
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${starCenterX + xPosition}px`,
        top: `${starCenterY + yPosition}px`,
      }}
    />
  );
}
