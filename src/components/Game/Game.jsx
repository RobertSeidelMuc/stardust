import React, { useEffect, useRef, useState } from "react";
import { Col, Frame, Puffs, Row } from "arwes";

import Star from "./Star/Star";

export default function Game() {
  const ref = useRef(null);
  const [screenHeight, setScreenHeight] = useState(0);
  const [gridWidth, setGridWidth] = useState(0);
  const [gridHeight, setGridHeight] = useState(0);
  const [stars, setStars] = useState([]);
  const grid = { columns: 8, rows: 4 };

  useEffect(() => {
    function handleResize() {
      if (ref.current) {
        const newScreenWidth = ref.current.clientWidth;
        const newScreenHeight = (ref.current.clientWidth / 5) * 3;
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

    const starNames = [
      "Aldebaran",
      "Alpha Hydri",
      "Altair",
      "Beta Pictoris",
      "Canis Minoris",
      "Canum Venaticorum",
      "Comae Berenices",
      "Chi Herculis",
      "Cygni",
      "Delta Equulei",
      "Denebola",
      "Epsilon Serpentis",
      "Eta Scorpii",
      "Fomalhaut",
      "Gamma Tucanae",
      "Iota Virginis",
      "Kappe Doradus",
      "Lambda Arae",
      "Leonis Minoris",
      "Mu Cassiopeiae",
      "Nu Octantis",
      "Omicron Aquilae",
      "Ophiuchi",
      "Pi Mensae",
      "Pollux",
      "Procyon",
      "Psi Capricorni",
      "Rho Puppis",
      "Sigma Ursae",
      "Sirius",
      "Tau Cygni",
      "Theta Sculptoris",
      "Upsilon Aquarii",
      "Ursae Majoris",
      "Vega",
      "Xi Pegasi",
      "Zeta Leporis",
    ];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    shuffleArray(starNames);

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
