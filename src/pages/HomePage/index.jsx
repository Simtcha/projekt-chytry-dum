
import './style.css';
import smartHomeData from '../../smartHomeData';

import { Dashboard } from '../../Components/Dashboard/Dashboard';
import { Header } from '../../Components/Header/Header';

export const HomePage = () => {
  return (
    <>
     
    <div className="container">
     <Header title='Chytrý dům'/>
     <Dashboard data={smartHomeData} />
  
    </div>
    </>
  );
};
