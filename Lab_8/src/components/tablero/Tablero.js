import React from "react";
import Carta from "../carta/carta.js";

import "./tablero.css";


export default class Tablero extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    
    return (
        <div className="Tablero">
            {
              this.props.miBar.map((carta) => <Carta src={carta.icono.src}/>)
            }
        </div>
    );
  }
}