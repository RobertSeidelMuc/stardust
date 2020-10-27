import React, { useEffect, useRef, useState } from "react";
import { Col, Frame, Puffs, Row } from "arwes";

export default function Game() {
  const ref = useRef(null);
  const [screenHeight, setScreenHeight] = useState(0);
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);
  const [stars, setStars] = useState([]);
  const [starDiameter, setStarDiameter] = useState(0);
  const [glowRadius, setGlowRadius] = useState(0);
  const starSizeFactor = 16;
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
      const newStarDiameter = newScreenHeight / starSizeFactor;
      setScreenHeight(newScreenHeight);
      setStarDiameter(newStarDiameter);
      setGlowRadius(newStarDiameter / 3);
      setGridHeight(newScreenHeight / grid.rows);
      setGridWidth(newScreenWidth / grid.columns);
    }
  }

  useEffect(() => {
    //returns a random number between min (included) and max (excluded)
    function randomize(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const starTypes = [
      { category: "blue", highlight: "#0ff", shadow: "#f0f" },
      { category: "green", highlight: "#0f1", shadow: "#0fb" },
      { category: "red", highlight: "#ff7a7a", shadow: "#ffbb80" },
      { category: "white", highlight: "#ccfffd", shadow: "#0fe" },
      { category: "yellow", highlight: "#ef0", shadow: "#fa0" },
    ];

    const newStars = [];
    for (let r = 0; r < grid.rows; r++) {
      for (let c = 0; c < grid.columns; c++) {
        const newType = starTypes[randomize(0, starTypes.length)];

        const newStar = {
          row: r,
          column: c,
          x: randomize(0, 100),
          y: randomize(0, 100),
          type: newType,
        };
        newStars.push(newStar);
      }
    }

    setStars(newStars);
  }, [grid.rows, grid.columns]);

  function renderStars() {
    const starNodes = stars.map((star) => (
      <span
        key={`star_row${star.row}_column${star.column}`}
        className="star"
        style={{
          backgroundColor: "white",
          boxShadow: `inset 0 0 ${
            glowRadius / 2
          }px #fff, /* inner white */ inset ${-glowRadius / 2}px 0 ${
            glowRadius * 2
          }px ${star.type.highlight}, /* inner right cyan short */ inset ${
            glowRadius / 2
          }px 0 ${glowRadius * 16}px ${
            star.type.shadow
          }, /* inner left magenta broad */ inset ${-glowRadius / 2}px 0 ${
            glowRadius * 4
          }px ${star.type.highlight}, /* inner right cyan broad */ 0 0 ${
            glowRadius / 2
          }px #fff, /* outer white */ ${-glowRadius / 8}px 0 ${glowRadius}px ${
            star.type.shadow
          }, /* outer left magenta */ ${glowRadius / 8}px 0 ${glowRadius}px ${
            star.type.highlight
          } /* outer right cyan */`,
          width: starDiameter,
          height: starDiameter,
          position: "absolute",
          top: `${
            gridHeight * 0.05 +
            ((gridHeight * 0.9 - starDiameter) / 100) * star.y +
            gridHeight * star.row
          }px`,
          left: `${
            gridWidth * 0.05 +
            ((gridWidth * 0.9 - starDiameter) / 100) * star.x +
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
