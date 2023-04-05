import { useState, useEffect } from "react";
import API from "../api/API.js";
import Panel from "../UI/Panel";
import { FaRegEdit } from "react-icons/fa";
import Button from "../UI/Button";
import BookingForm from "../entities/BookingForm";
import Calendar from 'react-calendar';
import '../entities/Calendar.css';


export default function BookingPanels({ bookings, loadingMessage, reloadBookings }) {
  // Initialisation ---------
  const putEndpoint = '/bookings';

  // State --------
  const [selectedForm, setSelectedForm] = useState(0);
  // Context ---------
  // Methods ---------
  const handleEdit = (id) => setSelectedForm(id === selectedForm ? 0 : id);
  const handleEditSubmit = async (booking) => {
    console.log(`handleEditSubmit`);

    const response = await API.put(`${putEndpoint}/${booking.BOOKING_ID}`, booking);
    if (response.isSuccess) {
      setSelectedForm(0);
      reloadBookings();

    }

  }
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedBookings, setSelectedBookings] = useState([]);

  useEffect(() => {
    const filteredBookings = bookings.filter(booking => {
      const bookingDate = new Date(booking.DATEBOOKED);
      const currentDate = new Date();
      return (
        bookingDate.getFullYear() === currentDate.getFullYear() &&
        bookingDate.getMonth() === currentDate.getMonth() &&
        bookingDate.getDate() === currentDate.getDate()
      );
    });
    setSelectedBookings(filteredBookings);
  }, [bookings]);


  const handleDateChange = date => {
    setSelectedDate(date);

    // Filter bookings based on selected date
    const filteredBookings = bookings.filter(booking => {
      const bookingDate = new Date(booking.DATEBOOKED);
      return bookingDate.getFullYear() === date.getFullYear() &&
        bookingDate.getMonth() === date.getMonth() &&
        bookingDate.getDate() === date.getDate();
    });

    setSelectedBookings(filteredBookings);
  };



  const handleCancel = () => setSelectedForm(0);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  //const sortedBookings = bookings.sort((a, b) => new Date(b.DATEBOOKED) - new Date(a.DATEBOOKED));
  return (
    <section className="cal-section">
      <div>
        <Calendar onChange={handleDateChange} value={selectedDate || new Date()} />
        {
          selectedBookings.length > 0
            ? (
              <ul>
                {selectedBookings.map(booking => (
                  <Panel
                    key={booking.BOOKING_ID}
                    title={` ${new Date(booking.DATEBOOKED).toLocaleDateString(undefined, options)}`}
                  >
                    <div className="card">
                      <div className="name">
                        Vehicle: {booking.MAKE} {booking.MODEL} {booking.MODELYEAR} £{booking.PRICE}
                      </div>
                      {/* <p>{JSON.stringify(booking.UserId)}</p> */}
                      <div className="name">
                        Customer Name: {booking.Customer} {booking.PHONENO} [{booking.Customer_ID}]
                      </div>
                      <div className="name">
                        Saleperson: {booking.Salesperson}
                      </div>
                    </div>
                    <Button color='(192, 192, 192)' iconName={<FaRegEdit />} text='Edit' onClick={() => handleEdit(booking.BOOKING_ID)} ></Button>
                    <Button color='rgb(209, 69, 50)' text='Cancel' onClick={handleCancel} ></Button>

                    {
                      (selectedForm === booking.BOOKING_ID) &&
                      <BookingForm onCancel={handleCancel} onSubmit={handleEditSubmit} initialBooking={booking} />
                    }
                  </Panel>
                ))}
              </ul>
            )
            : <p>No bookings for selected date {loadingMessage} </p>
        }
      </div>
    </section>
  );
}


