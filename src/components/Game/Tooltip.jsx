import React from "react";
import { Frame, Heading, Paragraph } from "arwes";

export default function Tooltip(props) {
  const { showTooltip, grid, screenWidth, screenHeight } = props;
  return (
    <Frame
      animate
      corners={1}
      level={0}
      style={{
        minWidth: "10rem",
        position: "absolute",
        left:
          showTooltip.starData.column + 1 <= grid.columns / 2 &&
          `${showTooltip.positionLeft + showTooltip.diameter * 1.5}px`,
        right:
          showTooltip.starData.column + 1 > grid.columns / 2 &&
          `${
            screenWidth - showTooltip.positionLeft + showTooltip.diameter * 0.5
          }px`,
        top:
          showTooltip.starData.row + 1 <= grid.rows / 2 &&
          `${showTooltip.positionTop}px`,
        bottom:
          showTooltip.starData.row + 1 > grid.rows / 2 &&
          `${
            screenHeight - showTooltip.positionTop - showTooltip.diameter * 0.5
          }px`,
        zIndex: 100,
      }}
    >
      <Heading node="h5" style={{ whiteSpace: "nowrap", margin: "0.5em" }}>
        {showTooltip.starData.name}
      </Heading>
      <Paragraph style={{ margin: "0 0.5em 0.5em 0.5em" }}>
        <span style={{ fontWeight: 600 }}>
          {showTooltip.starData.planets.length > 1 ? "Planeten:" : "Planet:"}
        </span>
        <br />
        {showTooltip.starData.planets.map((planet) => (
          <>
            {planet.name}
            <br />
          </>
        ))}
      </Paragraph>
    </Frame>
  );
}
