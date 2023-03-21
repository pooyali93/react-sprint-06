import Panel from "../UI/Panel";


export default function VehiclePanels  ({vehicles,loadingMessage}) {
  // Initialisation ---------

  // State --------
  // Context ---------
  // Methods ---------

  return (
    <section>
    {
      !vehicles
          ? <p>{loadingMessage}</p>
          : vehicles.length === 0
              ? <p>You have no vehicle</p>
              : vehicles.map((vehicle) =>
                  <Panel 
                      key={vehicle.VEHICLE_ID} 
                      title={`${vehicle.MAKE} ${vehicle.MODEL} ${vehicle.MODELYEAR} ${vehicle.COLOUR} £${vehicle.PRICE}`} 
                  >
                  <div className="card">
                     <div className="name">
                     Vehicle: {vehicle.MAKE} Model: {vehicle.MODEL} Year:{vehicle.YEAR} Colour: {vehicle.COLOUR} £ {vehicle.PRICE}
                     </div>
                  </div>
                  </Panel>
                  )  
  }
  </section>
  );
}