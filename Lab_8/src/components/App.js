import React from "react";
import Header from "./header/header.js";
import Tablero from "./tablero/Tablero.js";
import baraja from "../Assets/utils/construccion.js"

import "./App.css";

const getEstadoInicial = () =>{
  const miBaraja = baraja();
  return{
    miBaraja,
    parejaSeleccionada: [],
    estaComparando: false,
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
          <Tablero 
            miBar={this.state.miBaraja}
            parejaSeleccionada={this.state.parejaSeleccionada}
            seleccionCarta={(carta) => this.seleccionCarta(carta)}
          />
        </div>
        
      </div>
    );
  }

  seleccionCarta(carta){
    if(
      this.state.estaComparando || 
      this.state.parejaSeleccionada.indexOf(carta) > -1 || 
      carta.fueAdivinada){

      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    })

    if (parejaSeleccionada.length === 2){
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada){
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let miBaraja = this.state.miBaraja;

      if (primeraCarta.icono === segundaCarta.icono){
        miBaraja = miBaraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono){
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      this.setState({
        parejaSeleccionada: [],
        miBaraja,
        estaComparando: false,
      });
    }, 1000);
  }
}