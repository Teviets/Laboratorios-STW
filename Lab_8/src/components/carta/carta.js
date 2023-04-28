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

    onComponentDidUpdate(){

    }

    handleClick(e) {
        e.preventDefault();
        this.props.seleccionCarta();
        this.setState({ isFlipped:true });
    }
      

    render() {
      
      return (
        <div className="carta" >
            
            <ReactCardFlip 
                isFlipped={this.state.isFlipped && this.props.estaSiendoComparada} 
                flipDirection="horizontal"
               // flipped={this.props.estaSiendoComparada || this.props.fueAdivinada} 
                disable={true}
            >
                <div >
                    <img src={backCard} onClick={this.handleClick}/>
                </div>
                <div>
                    <img src={this.props.src} />
                </div>
                
            </ReactCardFlip>
        </div>
      );
    }
  }