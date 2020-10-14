import React from "react";
import "./App.css";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Intro from "./components/intro/intro";
import Player from "./components/player/player";
import Hall from "./components/hall/hall";
import Session from "./components/session/session";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hall" component={Hall} />
        <Route path="/player" component={Player} />
        <Route path="/session" component={Session} />
        <Route path="/" component={Intro} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
