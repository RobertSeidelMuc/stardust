import React from "react";

export default function Star(props) {
  const starSizeFactor = 16;
  const diameter = props.screenHeight / starSizeFactor;
  const glowRadius = diameter / 3;
  const positionLeft =
    props.gridWidth * 0.05 +
    ((props.gridWidth * 0.9 - diameter) / 100) * props.starData.x +
    props.gridWidth * props.starData.column;
  const positionTop =
    props.gridHeight * 0.05 +
    ((props.gridHeight * 0.9 - diameter) / 100) * props.starData.y +
    props.gridHeight * props.starData.row;

  return (
    <>
      <div
        className="star"
        onMouseOver={() => {
          if (!props.showTooltip.show) {
            props.setShowTooltip({
              show: true,
              diameter: diameter,
              starData: props.starData,
              positionLeft: positionLeft,
              positionTop: positionTop,
            });
          }
        }}
        onMouseLeave={() => {
          if (props.showTooltip.show) {
            props.setShowTooltip({
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
          }px ${
            props.starData.type.highlight
          }, /* inner right cyan short */ inset ${glowRadius / 2}px 0 ${
            glowRadius * 16
          }px ${
            props.starData.type.shadow
          }, /* inner left magenta broad */ inset ${-glowRadius / 2}px 0 ${
            glowRadius * 4
          }px ${
            props.starData.type.highlight
          }, /* inner right cyan broad */ 0 0 ${
            glowRadius / 2
          }px #fff, /* outer white */ ${-glowRadius / 8}px 0 ${glowRadius}px ${
            props.starData.type.shadow
          }, /* outer left magenta */ ${glowRadius / 8}px 0 ${glowRadius}px ${
            props.starData.type.highlight
          } /* outer right cyan */`,
          width: diameter,
          height: diameter,
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
