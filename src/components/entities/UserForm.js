import Form from '../UI/Form';

const emptyUser = {
    USER_ID:1,
    FIRSTNAME: "John",
    LASTNAME: "Cena",
    STREET: "1 Kingston Road",
    CITY: "Kingston",
    POSTCODE: "KT1 2AS",
    EMAIL: "john.cena@kingston.uk",
    PHONENO: "+44 7987 456 7766",

}

export default function UserForm({onSubmit,onCancel, initialUser=emptyUser}){
    // Initialisation ---------
    const validation = {
       isValid: { 
        USER_ID: (Cid) =>  /^\d+$/.test(Cid),
      },
      errorMessage: {
        FIRSTNAME: "First name must be only in letters",
        LASTNAME: "last name must be only in letters",
        STREET: "Please enter door number and street name",
        CITY: "PLease enter the city name",
        POSTCODE: "please enter a valid Postcode",
        EMAIL: "Email Format is incorrect",
        PHONENO: "wrong phone number formal",

      }
    }
    // State  ---------
    
    const [user, errors, handleChange, handleSubmit] = Form.useForm(initialUser, validation, onSubmit,onCancel);
   // const [user, , loadUserMessage, ] = useLoad('/user');
 
    // Handler ---------  
    // View ---------
  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.Item
        label ="First name"
        htmlFor="FIRSTNAME"
        advice="Please Enter your first name"
        error={errors.FIRSTNAME}
      >
        <input 
            type="text"
            name="FIRSTNAME"
            value={user.FIRSTNAME}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Last name"
        htmlFor="LASTNAME"
        advice="Please Enter Last name"
        error={errors.LASTNAME}
      >
        <input 
            type="text"
            name="LASTNAME"
            value={user.LASTNAME}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Street name"
        htmlFor="STREET"
        advice="Please Enter first line of address"
        error={errors.STREET}
      >
        <input 
            type="text"
            name="STREET"
            value={user.STREET}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="City"
        htmlFor="CITY"
        advice="Please Enter City"
        error={errors.CITY}
      >
        <input 
            type="text"
            name="CITY"
            value={user.CITY}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="POSTCODE"
        htmlFor="POSTCODE"
        advice="Please Enter vaild Postcode"
        error={errors.POSTCODE}
      >
        <input 
            type="text"
            name="POSTCODE"
            value={user.POSTCODE}
            onChange={handleChange}
        />
      </Form.Item>  
      <Form.Item
        label ="Email"
        htmlFor="EMAIL"
        advice="Please Enter vaild Email"
        error={errors.EMAIL}
      >
        <input 
            type="email"
            name="EMAIL"
            value={user.EMAIL}
            onChange={handleChange}
        />
      </Form.Item>
      <Form.Item
        label ="Phone number"
        htmlFor="PHONENO"
        advice="Please Enter Phone Number"
        error={errors.PHONENO}
      >
        <input 
            type="numeric"
            name="PHONENO"
            value={user.PHONENO}
            onChange={handleChange}
        />
      </Form.Item>     
    </Form>
  )
}