import API from "../api/API.js";
import useLoad from "../api/useLoad.js";
import './MyBookings.scss'
import BookingForm from "../entities/BookingForm";
import BookingPanels from "../entities/BookingPanels.js";
//import { useAuth } from '../auth/useAuth.js';
import { useState } from "react";


export default function MyBookings() {
    // Initialisation ---------
    //const { loggedinUser } = useAuth();
     //const endpoint = `/users/${loggedinUser.USER_ID}`
     const endpoint = '/bookings'
 

    // State --------
    const [bookings, , loadingMessage, loadBookings] = useLoad(endpoint)
    const [showAddBookingForm, setShowAddBookingForm] = useState(true);

    // Context ---------
    // Methods ---------
    //const toggleAddForm = () => setShowAddBookingForm(!showAddBookingForm);
    const cancelAddForm = () => setShowAddBookingForm(false);

    const handleAddSubmit = async (booking) => {
        console.log(`handleAddSubmit ${booking}` );
        const response = await API.post(endpoint, booking);
        return response.isSuccess
            ? loadBookings(endpoint) || true
            : false;
    }

    // const shortTime = new Intl.DateTimeFormat("en", {
    //     timeStyle: "short"
    //   });
    // View ---------
    return (
        <section>
            <div className="item-container">
            {
                !bookings
                    ? <p>{loadingMessage}</p>
                    : bookings.length === 0
                        ? <p>You do not have any bookings</p>
                        : <BookingPanels bookings={bookings} reloadBookings={() => loadBookings(endpoint)} />
            }
            
            <div className="form-container">
                {
                    showAddBookingForm && <BookingForm onCancel={cancelAddForm} onSubmit={handleAddSubmit} />
                }
            </div>
            </div>
        </section>
    )
}