import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
  withSounds,
  Arwes,
} from "arwes";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Game from "./components/MainMenu/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";

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
          <Router>
            <Switch>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/">
                <MainMenu />
              </Route>
            </Switch>
          </Router>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
