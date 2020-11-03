import React, { useEffect, useState } from "react";
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

  const [increase, setIncrease] = useState(0);

  const x =
    orbitRadius *
    Math.cos(radiansStart + radiansStep * (planetNumber - 1) + increase);
  const y =
    orbitRadius *
    Math.sin(radiansStart + radiansStep * (planetNumber - 1) + increase);

  const [xPosition, setXPosition] = useState(x);

  const [yPosition, setYPosition] = useState(y);

  useEffect(() => {
    const movement = setInterval(() => {
      setIncrease(increase + 0.02);
    }, 1000);
    return () => clearInterval(movement);
  }, [increase]);

  useEffect(() => {
    setXPosition(x);
    setYPosition(y);
  }, [x, y]);

  return (
    <div
      key={`${starData.name}_${planetNumber}`}
      className="planet"
      style={{
        position: "absolute",
        width: `${Math.round(diameter)}px`,
        height: `${Math.round(diameter)}px`,
        transition: "transform linear 1.5s",
        transform: `translateX(${starCenterX + xPosition}px) translateY(${
          starCenterY + yPosition
        }px)`,
        cursor: "pointer",
      }}
    />
  );
}
