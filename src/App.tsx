import React from "react";
import { Game } from "./components/Game";

import "./App.css";

export class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}
