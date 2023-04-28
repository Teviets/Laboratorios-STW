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
    intentos: 0 
  };
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = getEstadoInicial();
  }

  render() {
    console.log(this.state.miBaraja);
    return (
      <div className="App">
        <Header 
          intentos={this.state.intentos}
        />
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
      carta.fueAdivinada
      ){

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
    console.log(parejaSeleccionada)
    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let miBaraja = this.state.miBaraja;
      
      if (primeraCarta.icono.id === segundaCarta.icono.id){

        miBaraja = miBaraja.map((carta) => {
          if (carta.icono.id !== primeraCarta.icono.id){
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
        this.setState({
          parejaSeleccionada: [],
          miBaraja: [...miBaraja],
          estaComparando: false,
          intentos: this.state.intentos + 1
        });
      }else{
        let indice1 = miBaraja.findIndex((carta) => carta.icono.id === primeraCarta.icono.id)
        let indice2 = miBaraja.findIndex((carta) => carta.icono.id === segundaCarta.icono. id)
        miBaraja[indice1].fueAdivinada = true;
        miBaraja[indice2].fueAdivinada = false;
        console.log('son diferentes', miBaraja); 
        this.setState({
          parejaSeleccionada: [],
          miBaraja: [...miBaraja],
          estaComparando: false,
          intentos: this.state.intentos + 1
        });
      }

      this.verificarSiHayGanador(miBaraja);
     
    }, 1000);
  }

  verificarSiHayGanador(miBaraja){
    if (
      miBaraja.filter((carta) => !carta.fueAdivinada).length === 0
    ){
      alert("Ganaste con ${this.state.intentos} intentos");
    }
  }
}