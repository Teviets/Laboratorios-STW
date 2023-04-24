import React from "react";
import Header from "./header/header.js";
import Tablero from "./tablero/Tablero.js";

import "./App.css";


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Tablero />
      </div>
    );
  }
}