import { useState } from "react";
import './Light.css';
import lightOn from "./light-on.svg";
import lightOff from "./light-off.svg";

export const Light = ({ roomName, initialState }) => {
    const [lightState, setLightState] = useState(initialState);

    const turnOnLight = () => {
        setLightState(lightState === 'on' ? 'off' : 'on');
    };

    return (
        <div className="light" onClick={turnOnLight}>
            <div className="light__icon">
                <img src={lightState === 'off' ? lightOff : lightOn} alt="light bulb" />
            </div>
            <div className="light__name">
                {roomName}
            </div>
        </div>
    );
};


