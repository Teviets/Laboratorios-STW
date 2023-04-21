import "./carta.css";

import React, {useState, useEffect} from "react";

export default function carta(props){
    const [rotatated, setRotated] = useState(false);

    const handleClick = () => {
        setRotated(!rotated);
    }

    return (
        <div className={`card ${rotated ? 'rotated' : ''}`} onClick={handleClick}>
            <div className="front">
                
            </div>
        </div>
    )
}