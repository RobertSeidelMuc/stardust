import React, { useState } from "react";

export default function Star(props) {
  const [showToolTip, setShowToolTip] = useState(false);

  const starSizeFactor = 16;
  const diameter = props.screenHeight / starSizeFactor;
  const glowRadius = diameter / 3;

  return (
    <div
      className="star"
      onMouseOver={() => console.log(props.starData.name)}
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
        top: `${
          props.gridHeight * 0.05 +
          ((props.gridHeight * 0.9 - diameter) / 100) * props.starData.y +
          props.gridHeight * props.starData.row
        }px`,
        left: `${
          props.gridWidth * 0.05 +
          ((props.gridWidth * 0.9 - diameter) / 100) * props.starData.x +
          props.gridWidth * props.starData.column
        }px`,
        cursor: "pointer",
      }}
      //   onMouseEnter={setShowToolTip(true)}
      //   onMouseLeave={setShowToolTip(false)}
    >
      <div className="starOverlay"></div>
    </div>
  );
}
