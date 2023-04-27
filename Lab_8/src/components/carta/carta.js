import "./carta.css";
import backCard from "../../Assets/img/BackCard.png";

import React from "react";
import ReactCardFlip from 'react-card-flip';


export default class Carta extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
      

    render() {
      
      return (
        <div className="carta" onClick={this.props.seleccionarCarta}>
            <ReactCardFlip 
                isFlipped={this.state.isFlipped} 
                flipDirection="horizontal"
                flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
                disable={true}
            >
                <div >
                    <img src={backCard} onClick={this.handleClick}/>
                </div>
                <div>
                    <img src={this.props.src} onClick={this.handleClick}/>
                </div>
                
            </ReactCardFlip>
        </div>
      );
    }
  }