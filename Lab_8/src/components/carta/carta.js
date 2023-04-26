import "./carta.css";

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
        <div className="carta">
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div>
                    <img src={this.props.src} onClick={this.handleClick}/>
                </div>
                <div >
                    <p onClick={this.handleClick}>Mi Prueba</p>
                </div>
            </ReactCardFlip>
        </div>
      );
    }
  }