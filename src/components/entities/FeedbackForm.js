import Form from '../UI/Form';
import useLoad from '../api/useLoad';
import DatePicker from "react-datepicker";
import "../entities/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";

const emptyFeedback = {
  FEEDBACK_ID: 1,
  RATING: 0,
  MESSAGE: "I would like to give five sar to this dealer",
  DATE: new Date().toISOString().slice(0, 19).replace('T', ' '),
  CUST_ID: 0,
}

export default function FeedbackForm({ onSubmit, onCancel, initialFeedback = emptyFeedback }) {
  // Initialisation ---------
  const validation = {
    isValid: {
      RATING: (rating) => (rating >= 1 ) && (rating <=5 ),
      MESSAGE: (text) => text.length > 50,
      CUST_ID: (id) => id !== 0,
    },
    errorMessage: {
      RATING: "Rating must be between 1 and 5",
      MESSAGE: "feedback message is too short",
      DATE: "Date can not be in future",
      CUST_ID: "Please select a user",

    }
  }
  // State  ---------

  const [feedback, errors, handleChange, handleSubmit] = Form.useForm(initialFeedback, validation, onSubmit, onCancel);
  const [customers, , loadCustomerMessage,] = useLoad('/users/customers');

  // Handler ---------  
  // View ---------
  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.Item
        label="Rating"
        htmlFor="RATING"
        advice="Please select a rating between 1 and 5"
        error={errors.RATING}
      >
        <select
          name="RATING"
          value={feedback.RATING}
          onChange={handleChange}
        >
          <option value="">-- Select rating --</option>
          <option value="1">&#9733;</option>
          <option value="2">&#9733;&#9733;</option>
          <option value="3">&#9733;&#9733;&#9733;</option>
          <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
          <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
        </select>
      </Form.Item>

      <Form.Item
        label="Message"
        htmlFor="MESSAGE"
        advice="Please enter feedback"
        error={errors.MESSAGE}
      >
        <textarea 
          name="MESSAGE"
          value={feedback.MESSAGE}
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label="Date"
        htmlFor="DATE"
        advice="Please enter a Date"
        error={errors.DATE}
      >
        <DatePicker
          selected={new Date(feedback.DATE)}
          onChange={date => handleChange({ target: { name: 'DATE', value: date.toISOString().slice(0, 19).replace('T', ' ') } })}
          dateFormat="yyyy-MM-dd HH:mm:ss"
          showTimeSelect
          maxDate={new Date()}
          minTime={setHours(setMinutes(new Date(), 0), 9)}
          maxTime={setHours(setMinutes(new Date(), 0), 18)}
          timeFormat="HH:mm:ss"
          name="DATE" />
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
                value={feedback.USER_ID}
                onChange={handleChange}
              >

                <option value="0">None Selected</option>
                {


                  customers.map((customer) => <option key={customer.USER_ID} value={customer.USER_ID}>{customer.FIRSTNAME} {customer.LASTNAME}</option>)
                }

              </select>

        }
      </Form.Item>
    </Form>
  )
}