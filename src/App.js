import React, { useEffect } from "react";
import Vehicles from "./Vehicles/VehicleDataGrid";
import VehicleModal from "./Modals/VehicleModal";

import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [vehicles, setVehicles] = React.useState([
    //{ Id: 1, Model: 'BMW', Owner: 'Alex', Year: '2020', LicenseNumber: 'rt-11', Power: 210, TopSpeed: 300, UpTo100km_h: 8.9, Torque: '400Nm@1750-2500rpm', CO2Emissions: 1.29 }
  ]);
  const [flag, setFlag] = React.useState(false);

  const loadData = () => {
    const request = {
        method: 'GET',
        headers: { 'X-ApiKey-Test': 'Bord-Director-Alex-Agronik' }
    };

    fetch('http://localhost:63137/api/v1/vehicles', request)
      .then(response => response.json())
      .then(values => setVehicles(values));
  };

  useEffect(loadData, []);
  
  function removeItem(id) {
    const request = {
        method: 'DELETE',
        headers: { 'X-ApiKey-Test': 'Bord-Director-Alex-Agronik', 'Content-Type': 'application/json' }
    };

    if (id) {
        request.body = JSON.stringify([id]);
    }
    
    fetch('http://localhost:63137/api/v1/vehicles', request)
      .then(response => loadData());
  }

  const showPopup = () => {
    setFlag(true);
  };

  const hideModal = () => {
    setFlag(false);
  };

  function onCreate(item) {
    const request = {
        method: 'POST',
        headers: { 'X-ApiKey-Test': 'Bord-Director-Alex-Agronik', 'Content-Type': 'application/json' }
    };

    if (item) {
        request.body = JSON.stringify(item);
    }
    
    fetch('http://localhost:63137/api/v1/vehicles', request)
      .then(response => {
        setFlag(false);
        loadData();
      });
  };

  return (
    <div className='wrapper'>
      <h1>BordDirector Client</h1>
      <VehicleModal showModal={flag} hideModal={hideModal} onCreate={onCreate} />
      <Vehicles vehicles={vehicles} onClick={removeItem} />
      <button onClick={showPopup}>Add Vehicle</button>
    </div>
  );
}

export default App;
