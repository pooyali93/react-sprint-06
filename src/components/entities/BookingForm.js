import Form from '../UI/Form';
import useLoad from '../api/useLoad';
import DatePicker from "react-datepicker";
import "../entities/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import moment from "moment"


const emptyBooking = {
  VEHICLE_ID: 1,
  CUST_ID: 1,
  EMP_ID: 1,
  DATEBOOKED: new Date().toISOString().slice(0, 19).replace('T', ' ')
}

export default function BookingForm({ onSubmit, onCancel, initialBooking = emptyBooking }) {

  // Hooks 
  // Initialisation ---------
  const validation = {
    isValid: {
      VEHICLE_ID: (id) => id !== 0,
      Customer_ID: (id) => id !== 0,
      Sales_ID: (id) => id !== 0,
      DATEBOOKED: (date) => /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/.test(date)

    },
    errorMessage: {
      VEHICLE_ID: "Vehicle id must be a number",
      Customer_ID: "customer is not selected",
      Sales_ID: "Please select a salesperson",
      DATEBOOKED: "Please enter the date"
    }
  }
  // Hook  ---------
  const [booking, errors, handleChange, handleSubmit] = Form.useForm(initialBooking, validation, onSubmit, onCancel);
  const [vehicles, , loadVehicleMessage,] = useLoad('/vehicles');
  const [customers, , loadCustomerMessage,] = useLoad('/users/customers');
  const [salesperson, , loadSaleMessage,] = useLoad('/users/sales');

  const utcDate = new Date(booking.DATEBOOKED);

  // Set the timezone offset to UK timezone (UTC+1)
  const ukOffset = 60; // in minutes
  const ukDate = new Date(utcDate.getTime() + ukOffset * 60 * 1000);


  // Handler ---------  
  // View ---------
  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.Item
        label="Vehicle"
        htmlFor="VEHICLE_ID"
        advice="Please Select a Vehicle"
        error={errors.VEHICLE_ID}
      >
        {
          !vehicles
            ? <p>{loadVehicleMessage}</p>
            : vehicles.length === 0
              ? <p>No Vehicles found</p>
              : <select
                name="VEHICLE_ID"
                value={booking.VEHICLE_ID}
                onChange={handleChange}
              >
                <option value="0">None Selected</option>
                {
                  vehicles.map((vehicle) => <option key={vehicle.VEHICLE_ID} value={vehicle.VEHICLE_ID}>{vehicle.MAKE} {vehicle.MODEL} - {vehicle.MODELYEAR} £{vehicle.PRICE}</option>)
                }
              </select>
        }
      </Form.Item>
      <Form.Item
        label="Customer"
        htmlFor="CUST_ID"
        advice="Please select a customer"
        error={errors.CUST_ID}
      >
        {
          !customers
            ? <p>{loadCustomerMessage}</p>
            : customers.length === 0
              ? <p>No customers found</p>
              : <select
                name="CUST_ID"
                value={booking.USER_ID}
                onChange={handleChange}
              >

                <option value="0" disabled>None Selected</option>
                {


                  customers.map((customer) => <option key={customer.USER_ID} value={customer.USER_ID}>{customer.FIRSTNAME} {customer.LASTNAME}</option>)
                }

              </select>

        }
      </Form.Item>
      <Form.Item
        label="Saleperson"
        htmlFor="EMP_ID"
        advice="Please Select a Salesperson"
        error={errors.USER_ID}
      >
        {
          !salesperson
            ? <p>{loadSaleMessage}</p>
            : salesperson.length === 0
              ? <p>No salesperson found</p>
              : <select
                name="EMP_ID"
                value={booking.USER_ID}
                onChange={handleChange}
              >
                <option value="0" disabled>None Selected</option>
                {
                  salesperson.map((sale) => <option key={sale.USER_ID} value={sale.USER_ID}>{sale.FIRSTNAME} {sale.LASTNAME}</option>)
                }
              </select>
        }
      </Form.Item>

      <Form.Item
        label="Date of Booking"
        htmlFor="DATEBOOKED"
        advice="Please Enter Date of booking"
        error={errors.DATEBOOKED}
      >
        <DatePicker
          //selected={new Date(booking.DATEBOOKED)}
          selected={ukDate}
          onChange={date => handleChange({ target: { name: 'DATEBOOKED', value: date.toISOString().slice(0, 19).replace('T', ' ') } })}
          dateFormat="yyyy-MM-dd HH:mm:ss"
          showTimeSelect
          minDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 18)}
          timeFormat="HH:mm:ss"
          name="DATEBOOKED" />
      </Form.Item>
    </Form>
  )
}
