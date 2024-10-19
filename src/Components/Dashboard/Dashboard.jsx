import { Blinds } from '../Blinds/Blinds.jsx';
import { Climate } from '../Climate/Climate.jsx';
import { Energy } from '../Energy/Energy.jsx';
import { Lights } from '../Lights/Lights.jsx';
import './Dashboard.css';


export const Dashboard = ({data}) => {

return (
<main className="dashboard">
<Lights lights={data.lights} />
<Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
<Blinds state={data.blinds} />
<Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water}/>

</main>)
}



