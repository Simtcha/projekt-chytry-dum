import './Blinds.css';
import { useState } from "react";
import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';


export const Blinds = ({state}) => {
    const [blindsState, setBlindsState] = useState(state)
    

    return (
        <div className="blinds">
        <div className="blinds__icon">
            <img src={blindsState === 'open' ? blindsOpen : blindsClosed} />
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={blindsState === 'open' ? "button button--active" : "button"} onClick={()=>setBlindsState('open')}>Otevřeno</button>
            <button className={blindsState === 'closed' ? 'button button--active' : 'button'} onClick={()=>setBlindsState('closed')}>Zavřeno</button>
        </div>
    </div>

    )}
