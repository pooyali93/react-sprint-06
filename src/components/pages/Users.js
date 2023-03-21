import { useState } from "react";
import API from "../api/API.js";
import useLoad from "../api/useLoad.js";
import { FaPlus } from "react-icons/fa";
import Button from "../UI/Button";
import UserForm from "../entities/UserForm";
import Panel from "../UI/Panel.js";

export default function Users() {
  // Initialisation ---------
  // const loggedinUserID = 3;
  const endpoint = '/users';
  // State --------
  const [users, , loadingMessage, loadUsers] = useLoad(endpoint)
  const [showAddUsersForm, setShowUsersForm] = useState(false);

  // Context ---------
  // Methods ---------
  const toggleAddForm = () => setShowUsersForm(!showAddUsersForm);
  const cancelAddForm = () => setShowUsersForm(false);

  const handleAddUserSubmit = async (user) => {
    const response = await API.post(endpoint, user);
    return response.isSuccess
      ? loadUsers(endpoint) || true
      : false;
  }
  // View ---------
  return (
    <section>
      <div className="button">
        <Button color='rgb(58, 110, 165)' iconName={<FaPlus />} text='Add New User' onClick={toggleAddForm} ></Button>
      </div>
      <div className="form-container">
        {
          showAddUsersForm && <UserForm onCancel={cancelAddForm} onSubmit={handleAddUserSubmit} />
        }
      </div>

      {
        !users
          ? <p>{loadingMessage}</p>
          : users.length === 0
            ? <p>You have no user in stock</p>
            : users.map((user) =>
              <Panel
                key={user.USER_ID}
                title={`${user.USER_ID}, ${user.FIRSTNAME} ${user.LASTNAME}`}
              >
                <div className="card">
                  <div className="name">
                    Street Name: {user.STREET} City: {user.CITY} Postcode:{user.POSTCODE} Email: {user.EMAIL} Phone number:{user.PHONENO}
                  </div>
                </div>
              </Panel>
            )
      }

    </section>
  )

}




