import './Lights.css';
import { Light } from "../Light/Light";

export const Lights = ({ lights }) => {
    return(
    
        <div className="lights">

            {lights.map((light,index) => (<Light key={index} roomName={light.name} initialState={light.state} />)
            )}

        </div>)
    
}


