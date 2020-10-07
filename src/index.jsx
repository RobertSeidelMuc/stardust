import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
  withSounds,
  Arwes,
  Row,
  Col,
  Words,
} from "arwes";
import "./index.css";

import backgroundImage from "./assets/graphics/background-large.jpg";
import backgroundMusic from "./assets/sounds/background_music_solace.mp3";

const mySounds = {
  players: {
    background: {
      sound: { src: [backgroundMusic], loop: true },
      settings: { loop: true },
    },
  },
};

const Player = withSounds()((props) => {
  useEffect(() => {
    props.sounds.background.play();
  }, [props.sounds.background]);

  return <React.Fragment></React.Fragment>;
});

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <Player />
        <Arwes background={backgroundImage}>
          <Row>
            <Col
              s={12}
              m={8}
              l={6}
              offset={["m2", "l3"]}
              className="centerContent"
            >
              <h1>
                <Words animate>Stardust</Words>
              </h1>
            </Col>
          </Row>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
