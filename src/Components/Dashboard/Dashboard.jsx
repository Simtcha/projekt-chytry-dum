import { Lights } from '../Lights/Lights.jsx';
import './Dashboard.css';


export const Dashboard = ({data}) => {

return (
<main className="dashboard">
<Lights lights={data.lights} />
{/* Other components like Climate, Blinds, Energy will go here */}
</main>)
}



