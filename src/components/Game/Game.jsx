import React, { useEffect, useRef, useState } from "react";
import { Col, Frame, Row } from "arwes";

export default function Game() {
  const ref = useRef(null);
  const [screenHeight, setScreenHeight] = useState("0");
  const [gridWidth, setGridWidth] = useState("0");
  const [gridHeight, setGridHeight] = useState("0");
  const [starDiameter, setStarDiameter] = useState("0");
  const planetSizeFactor = 13;
  const grid = { columns: 8, rows: 4 };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleResize() {
    if (ref.current) {
      const newScreenWidth = ref.current.clientWidth;
      const newScreenHeight = (ref.current.clientWidth / 5) * 3;
      setScreenHeight(newScreenHeight);
      setStarDiameter(newScreenHeight / planetSizeFactor);
      setGridHeight(newScreenHeight / grid.rows);
      setGridWidth(newScreenWidth / grid.columns);
    }
  }

  function createStars() {
    let stars = [];
    for (let r = 0; r < grid.rows; r++) {
      for (let c = 0; c < grid.columns; c++) {
        console.log(`star_row${r}_column${c}`);
        stars.push(
          <span
            key={`star_row${r}_column${c}`}
            className="star"
            style={{
              width: starDiameter,
              height: starDiameter,
              position: "absolute",
              top: `${gridHeight / 2 + gridHeight * r}px`,
              left: `${gridWidth / 2 + gridWidth * c}px`,
            }}
          ></span>
        );
      }
    }
    return stars;
  }

  return (
    <>
      <Row>
        <Col s={9} offset={["s2"]} id="centercolumn">
          <Frame className="mainscreen" noBackground>
            <div
              ref={ref}
              style={{ width: "100%", height: `${screenHeight}px` }}
            >
              {createStars()}
            </div>
          </Frame>
        </Col>
      </Row>
    </>
  );
}
