import Form from '../UI/Form';
//import useLoad from '../api/useLoad';

const emptyVehicle = {
    VEHICLE_ID:1,
    VEHICLEURL: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    MAKE: "Land Rover",
    MODEL: "Range Rover",
    COLOUR: "White",
    MODELYEAR: 2013,
    NOOFDOORS: "5dr",
    PRICE: 18495,
    FUELTYPE: "Petrol",
    TRANSMISSION: "Automatic",
    ENGINESIZE: "2.5",
    MILEAGE: 13743
}

export default function VehicleForm({onSubmit,onCancel, initialVehicle=emptyVehicle}){
    // Initialisation ---------
    const validation = {
       isValid: { 
        VehicleId: (vid) =>  /^\d+$/.test(vid),
      },
      errorMessage: {
        VEHICLEURL: "Image URL is not valid",
        MAKE: "Vehicle Make does not exist",
        MODEL: "Vehicle Model does not exist",
        COLOUR: "Vehicle Colour does not exist",
        MODELYEAR: "Vehicle Year must be a number",
        PRICE: "Vehicle Price must be a number",
        MILEAGE: "Vehicle Mileage must be between 0 % 99999999",

      }
    }
    // State  ---------
    
    const [vehicles, errors, handleChange, handleSubmit] = Form.useForm(initialVehicle, validation, onSubmit,onCancel);
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
            value={vehicles.VEHICLEURL}
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
            value={vehicles.MAKE}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Model"
        htmlFor="MODEL"
        advice="Please Enter Image Model"
        error={errors.MODEL}
      >
        <input 
            type="text"
            name="MODEL"
            value={vehicles.MODEL}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Colour"
        htmlFor="COLOUR"
        advice="Please Enter Image Colour"
        error={errors.COLOUR}
      >
        <input 
            type="text"
            name="COLOUR"
            value={vehicles.COLOUR}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Year"
        htmlFor="MODELYEAR"
        advice="Please Enter Image Year"
        error={errors.MODELYEAR}
      >
        <input 
            type="number"
            name="MODELYEAR"
            value={vehicles.MODELYEAR}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Price"
        htmlFor="PRICE"
        advice="Please Enter Image Price"
        error={errors.PRICE}
      >
        <input 
            type="number"
            name="PRICE"
            value={vehicles.PRICE}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Vehicle Mileage"
        htmlFor="MILEAGE"
        advice="Please Enter Image Mileage"
        error={errors.MILEAGE}
      >
        <input 
            type="number"
            name="MILEAGE"
            value={vehicles.MILEAGE}
            onChange={handleChange}
        />
      </Form.Item>   
    </Form>
  )
}