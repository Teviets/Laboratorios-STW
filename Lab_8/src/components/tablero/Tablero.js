import React from "react";
import Carta from "../carta/carta.js";

import "./tablero.css";


export default class Tablero extends React.Component {
  render() {
    const memoria = [1,2,3,4,5];
    return (
        <div className="Tablero">
            {
                memoria.map((carta) => <Carta></Carta>)
            }
        </div>
    );
  }
}