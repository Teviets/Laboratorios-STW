import React from "react";
import "./header.css";

export default class Header extends React.Component{
    render () {
        return (
            <header>
                <div>
                    <h1>Lab 8</h1>
                </div>
                <div>
                    <button className="fourth" >
                        Reinicio
                    </button>
                </div>
                <div id="intento">
                    <span>Intentos: </span>
                </div>
            </header>
        )
    }
}