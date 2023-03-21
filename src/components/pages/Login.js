import { useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth.js';
import useLoad from '../api/useLoad.js';
import './Login.scss';

export default function Login() {
  // Initialisation ------------------------------
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  // State ---------------------------------------
  const [customers, , loadingCustomersMessage,] = useLoad(`/users/customers`);
  const [sales, , loadingSalesMessage,] = useLoad(`/users/employees`);
  const [selectedUser, setSelectedUser] = useState(null);

  // Context -------------------------------------
  // Methods -------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedUser) {
      // Check if the selected user exists in the list of customers or employees
      const isCustomer = customers.some((user) => user.USER_ID === selectedUser.USER_ID);
      const isEmployee = sales.some((user) => user.USER_ID === selectedUser.USER_ID);
      if (isCustomer || isEmployee) {
        // User exists, log in
        login(selectedUser);
        navigate(state?.path || '/bookings');
      } else {
        // User doesn't exist
        alert('Invalid user selected. Please select a valid user.');
      }
    } else {
      // No user selected
      alert('Please select a user to log in.');
    }
  };
  

  const handleCustomersChange = (event) => setSelectedUser(customers[parseInt(event.target.value)]);
  const handleSalesChange = (event) => setSelectedUser(sales[parseInt(event.target.value)]);


  // View ----------------------------------------
  return (
    <section>
      <div className="login-wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <h4>Login as a customer</h4>
        <label>Use this dropdown to select a customer</label>
        {
          !customers 
            ? <p>{loadingCustomersMessage}</p>
            : <>
                <select onChange={handleCustomersChange}>
                  <option value={null}>Select a customer ...</option>
                  {
                    customers.map((user) =>
                      <option key={user.USER_ID} value={user.USER_ID}>
                        {`${user.FIRSTNAME}, ${user.LASTNAME}`}
                      </option>
                    )
                  }
                </select>
              </>
        }
        <h4>Login as a member of employees</h4>
        <label>Use this dropdown to select an employee</label>
        {
          !sales 
            ? <p>{loadingSalesMessage}</p>
            : <>
                <select onChange={handleSalesChange}>
                  <option value={null}>Select an employee ...</option>
                  {
                    sales.map((user,index) =>
                      <option key={user.USER_ID} value={index}>
                        {`${user.FIRSTNAME}, ${user.LASTNAME}`}
                      </option>
                    )
                  }
                </select>
              </>
        }
        <button type="submit">Login</button>
      </form>
      </div>
    </section>
  );
}
