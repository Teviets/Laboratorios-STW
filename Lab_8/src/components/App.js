import React from "react";
import Header from "./header/header.js";
import Tablero from "./tablero/Tablero.js";
import baraja from "../Assets/utils/construccion.js"

import "./App.css";

const getEstadoInicial = () =>{
  const miBaraja = baraja();
  return{
    miBaraja
  };
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div id="tablero">
          <Tablero miBar={this.state.miBaraja}/>
        </div>
        
      </div>
    );
  }
}