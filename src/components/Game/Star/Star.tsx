import React from "react";
import { calculateStarPosition } from "./starHelperFunctions";
import IStarComponent from "./IStarComponent";

export default function Star(props: IStarComponent) {
  const {
    screenHeight,
    gridHeight,
    gridWidth,
    starData,
    showTooltip,
    setShowTooltip,
  } = props;
  const diameter = screenHeight / starData.sizeFactor;
  const glowRadius = diameter / 5;
  const positionLeft = calculateStarPosition(
    gridWidth,
    diameter,
    starData.x,
    starData.column
  );
  const positionTop =
    gridHeight * 0.05 +
    ((gridHeight * 0.9 - diameter) / 100) * starData.y +
    gridHeight * starData.row;

  return (
    <>
      <div
        className="star"
        onMouseOver={() => {
          if (!showTooltip.show) {
            setShowTooltip({
              show: true,
              diameter: diameter,
              starData: props.starData,
              positionLeft: positionLeft,
              positionTop: positionTop,
            });
          }
        }}
        onMouseLeave={() => {
          if (showTooltip.show) {
            setShowTooltip({
              show: false,
              diameter: 0,
              starData: {},
              positionLeft: 0,
              positionTop: 0,
            });
          }
        }}
        style={{
          backgroundColor: "white",
          boxShadow: `inset 0 0 ${
            glowRadius / 2
          }px #fff, /* inner white */ inset ${-glowRadius / 2}px 0 ${
            glowRadius * 2
          }px ${starData.type.highlight}, /* inner right cyan short */ inset ${
            glowRadius / 2
          }px 0 ${glowRadius * 16}px ${
            starData.type.shadow
          }, /* inner left magenta broad */ inset ${-glowRadius / 2}px 0 ${
            glowRadius * 4
          }px ${starData.type.highlight}, /* inner right cyan broad */ 0 0 ${
            glowRadius / 2
          }px #fff, /* outer white */ ${-glowRadius / 8}px 0 ${glowRadius}px ${
            starData.type.shadow
          }, /* outer left magenta */ ${glowRadius / 8}px 0 ${glowRadius}px ${
            starData.type.highlight
          } /* outer right cyan */`,
          width: `${diameter}px`,
          height: `${diameter}px`,
          position: "absolute",
          top: `${positionTop}px`,
          left: `${positionLeft}px`,
          cursor: "pointer",
        }}
      >
        <div className="starOverlay"></div>
      </div>
    </>
  );
}
