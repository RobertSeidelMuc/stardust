import React, { useEffect, useRef, useState } from "react";
import { Col, Frame, Puffs, Row } from "arwes";

export default function Game() {
  const ref = useRef(null);
  const [screenHeight, setScreenHeight] = useState("0");
  const [gridWidth, setGridWidth] = useState("0");
  const [gridHeight, setGridHeight] = useState("0");
  const [stars, setStars] = useState([]);
  const [starDiameter, setStarDiameter] = useState("0");
  const starSizeFactor = 14;
  const grid = { columns: 8, rows: 4 };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    function randomize(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const newStars = [];
    for (let r = 0; r < grid.rows; r++) {
      for (let c = 0; c < grid.columns; c++) {
        const newStar = {
          row: r,
          column: c,
          x: randomize(0, 100),
          y: randomize(0, 100),
        };
        newStars.push(newStar);
      }
    }

    setStars(newStars);
  }, []);

  function handleResize() {
    if (ref.current) {
      const newScreenWidth = ref.current.clientWidth;
      const newScreenHeight = (ref.current.clientWidth / 5) * 3;
      const newStarDiameter = newScreenHeight / starSizeFactor;
      setScreenHeight(newScreenHeight);
      setStarDiameter(newStarDiameter);
      setGridHeight(newScreenHeight / grid.rows);
      setGridWidth(newScreenWidth / grid.columns);
    }
  }

  function renderStars() {
    const starNodes = stars.map((star) => (
      <span
        key={`star_row${star.row}_column${star.column}`}
        className="star"
        style={{
          width: starDiameter,
          height: starDiameter,
          position: "absolute",
          top: `${
            ((gridHeight - starDiameter) / 100) * star.y + gridHeight * star.row
          }px`,
          left: `${
            ((gridWidth - starDiameter) / 100) * star.x +
            gridWidth * star.column
          }px`,
        }}
      ></span>
    ));

    return starNodes;
  }

  return (
    <>
      <Row>
        <Col s={9} offset={["s2"]} id="centercolumn">
          <Frame className="mainscreen" noBackground animate>
            <Puffs>
              <div
                ref={ref}
                style={{ width: "100%", height: `${screenHeight}px` }}
              >
                {renderStars()}
              </div>
            </Puffs>
          </Frame>
        </Col>
      </Row>
    </>
  );
}
