import React from "react";
import Carta from "../carta/carta.js";

import "./tablero.css";


export default class Tablero extends React.Component {
  constructor(props){
    super(props);
  }

  onComponentDidMount(){
    console.log('mount');
  }

  onComponentDidUpdate(){
    console.log('update',this.prop.miBar);
  }

  render() {
    
    return (
        <div className="Tablero">
            {
              this.props.miBar.map((carta, index) => {
                const estaSiendoComparada = this.props.parejaSeleccionada.indexOf(carta) > -1;
                console.log('comparada',estaSiendoComparada);
                return <Carta 
                  key={index}
                  src={carta.icono.src}
                  estaSiendoComparada={estaSiendoComparada}
                  seleccionCarta={() => this.props.seleccionCarta(carta)}
                  fueAdivinada={carta.fueAdivinada}
                />
              })
            }
        </div>
    );
  }
}