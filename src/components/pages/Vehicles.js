import { useState } from "react";
import API from "../api/API.js";
import useLoad from "../api/useLoad.js";
import { FaPlus } from "react-icons/fa";
import Button from "../UI/Button";
import VehicleForm from "../entities/VehicleForm";
import Panel from "../UI/Panel.js";
  
export default function Vehicles() {
 // Initialisation ---------
    // const loggedinUserID = 3;
    const endpoint = '/vehicles';

    // State --------
    const [vehicles, , loadingMessage, loadVehicles] = useLoad(endpoint)
    const [showAddVehicleForm, setShowAddVehicleForm] = useState(false);
    
    // Context ---------
    // Methods ---------
    const toggleAddForm = () => setShowAddVehicleForm(!showAddVehicleForm);
    const cancelAddForm = () => setShowAddVehicleForm(false);

    const handleAddVehicleSubmit = async(vehicle) => {
        const response = await API.post(endpoint, vehicle);
        return response.isSuccess
            ? loadVehicles(endpoint)  || true
            : false;
    }
    // View ---------
    return (
        <section>
             <div  className="button">
                <Button color='rgb(58, 110, 165)' iconName={<FaPlus/>} text='Add New Vehicle' onClick={toggleAddForm} ></Button>
            </div>
            <div className="form-container">
                {
                    showAddVehicleForm && <VehicleForm onCancel={cancelAddForm} onSubmit={handleAddVehicleSubmit}/> 
                }
            </div>
            
            {
                !vehicles
                    ? <p>{loadingMessage}</p>
                    : vehicles.length === 0
                        ? <p>You have no vehicle in stock</p>
                        : vehicles.map((vehicle) =>
                        <Panel 
                            key={vehicles.VEHICLE_ID} 
                            title={`${vehicle.VEHICLE_ID}, ${vehicle.MAKE} ${vehicle.MODEL} ${vehicle.MODELYEAR} ${vehicle.COLOUR} £${vehicle.PRICE}`} 
                        >
                        <div className="card">
                           <div className="name">
                           Vehicle: {vehicle.MAKE} Model: {vehicle.MODEL} Year:{vehicle.NODELYEAR} Colour: {vehicle.COLOUR} £ {vehicle.PRICE}
                           </div>
                        </div>
                        </Panel>
                        )   
            }
           
        </section>
    )

}




