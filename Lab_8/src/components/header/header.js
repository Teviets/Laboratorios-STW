import React from "react";
import "./header.css";

export default class Header extends React.Component{
    render () {
        return (
            <header>
                <div>
                    <h1>Memoria Witcher</h1>
                </div>
                <div>
                    <button className="fourth" onClick={() => window.location.reload()}>
                        Reinicio
                    </button>
                </div>
                <div id="intento">
                    <span>Intentos: {this.props.intentos}</span>
                </div>
            </header>
        )
    }
}