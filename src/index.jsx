import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  ThemeProvider,
  createTheme,
  SoundsProvider,
  createSounds,
  withSounds,
  Arwes,
  Footer,
  Link as ArwesLink,
} from "arwes";
import "./index.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Game from "./components/Game/Game";
import MainMenu from "./components/MainMenu/MainMenu";
import Impressum from "./components/Impressum/Impressum";
import Datenschutz from "./components/Datenschutz/Datenschutz";

import backgroundImage from "./assets/graphics/background-large.jpg";
import backgroundMusic from "./assets/sounds/background_music_solace.mp3";

const myTheme = {
  typography: {
    fontFamily: '"Titillium Web", Sans-Serif',
    headerFontFamily: '"Electrolize", Sans-Serif',
    fontSize: "12pt",
  },
};

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
    <ThemeProvider theme={createTheme(myTheme)}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <Player />

        <Arwes background={backgroundImage}>
          <Router>
            <div className="pagecontainer">
              <Switch>
                <Route path="/game">
                  <Game />
                </Route>
                <Route path="/impressum">
                  <Impressum />
                </Route>
                <Route path="/datenschutz">
                  <Datenschutz />
                </Route>
                <Route path="/">
                  <MainMenu />
                </Route>
              </Switch>
            </div>
            <Footer animate classes={{ root: "footer" }}>
              <Link to="/impressum">
                <ArwesLink style={{ margin: "0px", padding: "8px 8px 0 0" }}>
                  Impressum
                </ArwesLink>
              </Link>
              <Link to="/datenschutz">
                <ArwesLink style={{ margin: "0px", padding: "8px 8px 0 0" }}>
                  Datenschutz
                </ArwesLink>
              </Link>
            </Footer>
          </Router>
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
