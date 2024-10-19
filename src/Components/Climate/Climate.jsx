import './Climate.css';
import { useState } from "react";
import thermometer from './temp.svg';


export const Climate = ({ temperature, humidity }) => {
    const [temp, setTemp] = useState(temperature)
    
    return (

    <div className="climate">
        <div className="climate__icon">
            <img src={thermometer}/>
        </div>
        <div className="climate__content">
            <div className="climate__temperature">{temp}&deg;C</div>
            <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
        </div>
        <div className="climate__controls">
            <button className="button" onClick={()=>setTemp(temp + 1)}>+</button>
            <button className="button" onClick={()=>setTemp(temp - 1)}>-</button>
        </div>
    </div> 
    )
    }