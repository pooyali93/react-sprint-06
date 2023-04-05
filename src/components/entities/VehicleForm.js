import Form from '../UI/Form';
//import useLoad from '../api/useLoad';

const emptyVehicle = {
    VEHICLE_ID:1,
    VEHICLEURL: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    MAKE: "Audi",
    MODEL: "A3",
    COLOUR: "White",
    MODELYEAR: 2013,
    NOOFDOORS: "5dr",
    PRICE: 18495,
    FUELTYPE: "Petrol",
    TRANSMISSION: "Automatic",
    ENGINESIZE: "2.0",
    MILEAGE: 13743,
}

export default function VehicleForm({onSubmit,onCancel, initialVehicle=emptyVehicle}){
    // Initialisation ---------
    const validation = {
       isValid: { 
        VEHICLE_ID: (vid) =>  /^\d+$/.test(vid),
      },
      errorMessage: {
        VEHICLEURL: "Image URL is not valid",
        MAKE: "Vehicle Make does not exist",
        MODEL: "Vehicle Model does not exist",
        COLOUR: "Vehicle Colour does not exist",
        MODELYEAR: "Vehicle Year must be a number",
        NOOFDOORS: "Vehicle door is either 3dr or 5dr",
        PRICE: "Vehicle Price must be a number",
        FUELTYPE: "Desiel, Petrol, Electric",
        TRANSMISSION: "Automatic or Manual",
        ENGINESIZE: "Engine Size must be between 1 and 4",
        MILEAGE:"Vehicle Mileage must be between 0 % 99999999",

      }
    }
    // State  ---------
    
    const [vehicle, errors, handleChange, handleSubmit] = Form.useForm(initialVehicle, validation, onSubmit,onCancel);
   // const [vehicles, , loadVehicleMessage, ] = useLoad('/vehicles');
 
    // Handler ---------  
    // View ---------
  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.Item
        label ="Vehicle URL"
        htmlFor="VEHICLEURL"
        advice="Please Enter Image URL"
        error={errors.VEHICLEURL}
      >
        <input 
            type="url"
            name="VEHICLEURL"
            value={vehicle.VEHICLEURL}
            onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label ="Vehicle Make"
        htmlFor="MAKE"
        advice="Please Enter Vehicle Make"
        error={errors.MAKE}
      >
        <input 
            type="text"
            name="MAKE"
            value={vehicle.MAKE}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Model"
        htmlFor="MODEL"
        advice="Please Enter Vehicle Model"
        error={errors.MODEL}
      >
        <input 
            type="text"
            name="MODEL"
            value={vehicle.MODEL}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Colour"
        htmlFor="COLOUR"
        advice="Please Enter Vehicle Colour"
        error={errors.COLOUR}
      >
        <input 
            type="text"
            name="COLOUR"
            value={vehicle.COLOUR}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Year"
        htmlFor="MODELYEAR"
        advice="Please Enter Vehicle Year"
        error={errors.MODELYEAR}
      >
        <input 
            type="number"
            name="MODELYEAR"
            value={vehicle.MODELYEAR}
            onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label ="Number Of doors"
        htmlFor="NOOFDOORS"
        advice="Please Enter Vehicle Year"
        error={errors.NOOFDOORS}
      >
        <input 
            type="text"
            name="NOOFDOORS"
            value={vehicle.NOOFDOORS}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Price"
        htmlFor="PRICE"
        advice="Please Enter Vehicle Price"
        error={errors.PRICE}
      >
        <input 
            type="number"
            name="PRICE"
            value={vehicle.PRICE}
            onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label ="Vehicle Fuel Type"
        htmlFor="FUELTYPE"
        advice="Please Enter Vehicle FUELTYPE"
        error={errors.FUELTYPE}
      >
        <input 
            type="text"
            name="FUELTYPE"
            value={vehicle.FUELTYPE}
            onChange={handleChange}
        />
      </Form.Item> 
      <Form.Item
        label ="Vehicle TRANSMISSION"
        htmlFor="TRANSMISSION"
        advice="Please Enter Vehicle TRANSMISSION"
        error={errors.TRANSMISSION}
      >
        <input 
            type="text"
            name="TRANSMISSION"
            value={vehicle.TRANSMISSION}
            onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label ="Vehicle Engine Size"
        htmlFor="ENGINESIZE"
        advice="Please Enter Vehicle Engine Size"
        error={errors.ENGINESIZE}
      >
        <input 
            type="number"
            name="ENGINESIZE"
            value={vehicle.ENGINESIZE}
            onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label ="Vehicle Mileage"
        htmlFor="MILEAGE"
        advice="Please Enter Vehicle Mileage"
        error={errors.MILEAGE}
      >
        <input 
            type="number"
            name="MILEAGE"
            value={vehicle.MILEAGE}
            onChange={handleChange}
        />
      </Form.Item>   
    </Form>
  )
}