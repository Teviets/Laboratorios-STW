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
              this.props.miBar.map((carta, index) => {
                const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
                return <Carta 
                  key={index}
                  src={carta.icono.src}
                  estaSiendoComparada={estaSiendoComparada}
                  seleccionarCarta={() => this.props.seleccionarCarta(carta)}
                  fueAdivinada={carta.fueAdivinada}
                />
              })
            }
        </div>
    );
  }
}