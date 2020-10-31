import React, { useEffect, useRef, useState } from "react";
import { Col, Frame, Puffs, Row, Words } from "arwes";

import Star from "./Star/Star";

import { planetNames } from "../../textdata/planetNames";
import { starNames } from "../../textdata/starNames";

export default function Game() {
  const ref = useRef(null);
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);
  const [stars, setStars] = useState([]);
  const grid = { columns: 8, rows: 4 };
  const [showTooltip, setShowTooltip] = useState({
    show: false,
    starData: {},
    diameter: 0,
    positionLeft: 0,
    positionTop: 0,
  });

  useEffect(() => {
    function handleResize() {
      if (ref.current) {
        const newScreenWidth = ref.current.clientWidth;
        const newScreenHeight = (ref.current.clientWidth / 5) * 3;
        setScreenWidth(newScreenWidth);
        setScreenHeight(newScreenHeight);
        setGridHeight(newScreenHeight / grid.rows);
        setGridWidth(newScreenWidth / grid.columns);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [grid.columns, grid.rows]);

  useEffect(() => {
    //returns a random number between min (included) and max (excluded)
    function randomize(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    const starTypes = [
      { category: "blue", highlight: "#0ff", shadow: "#f0f" },
      { category: "green", highlight: "#85ff8d", shadow: "#0fb" },
      { category: "red", highlight: "#ff7a7a", shadow: "#ffbb80" },
      { category: "white", highlight: "#ccfffd", shadow: "#0fe" },
      { category: "yellow", highlight: "#cdd47b", shadow: "#fa0" },
    ];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(starNames);
    shuffleArray(planetNames);

    const newStars = [];

    let index = 0;

    for (let r = 0; r < grid.rows; r++) {
      for (let c = 0; c < grid.columns; c++) {
        const newType = starTypes[randomize(0, starTypes.length)];

        const newStar = {
          row: r,
          column: c,
          x: randomize(0, 100),
          y: randomize(0, 100),
          type: newType,
          name: starNames[index],
        };
        newStars.push(newStar);
        index++;
      }
    }

    setStars(newStars);
  }, [grid.rows, grid.columns]);

  function renderStars() {
    const starNodes = stars.map((star) => (
      <Star
        starData={star}
        key={`star_row${star.row}_column${star.column}`}
        screenHeight={screenHeight}
        gridWidth={gridWidth}
        gridHeight={gridHeight}
        showTooltip={showTooltip}
        setShowTooltip={setShowTooltip}
      />
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
                style={{
                  width: "100%",
                  height: `${screenHeight}px`,
                }}
              >
                {renderStars()}
                {showTooltip.show === true && (
                  <Frame
                    animate
                    corners={1}
                    level={0}
                    style={{
                      position: "absolute",
                      left:
                        showTooltip.starData.column + 1 <= grid.columns / 2 &&
                        `${
                          showTooltip.positionLeft + showTooltip.diameter * 1.5
                        }px`,
                      right:
                        showTooltip.starData.column + 1 > grid.columns / 2 &&
                        `${
                          screenWidth -
                          showTooltip.positionLeft +
                          showTooltip.diameter * 0.5
                        }px`,
                      top:
                        showTooltip.starData.row + 1 <= grid.rows / 2 &&
                        `${showTooltip.positionTop}px`,
                      bottom:
                        showTooltip.starData.row + 1 > grid.rows / 2 &&
                        `${
                          screenHeight -
                          showTooltip.positionTop -
                          showTooltip.diameter * 0.5
                        }px`,
                      zIndex: 100,
                    }}
                  >
                    <Words
                      animate
                      style={{ whiteSpace: "nowrap", margin: "0.5em" }}
                    >
                      {showTooltip.starData.name}
                    </Words>
                  </Frame>
                )}
              </div>
            </Puffs>
          </Frame>
        </Col>
      </Row>
    </>
  );
}
