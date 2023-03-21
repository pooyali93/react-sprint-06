import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './BookingCalendar.css'

import React, { useState } from 'react';
import Calendar from 'react-calendar';

const BookingCalendar = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleBooking = date => {
    setBookings([...bookings, date]);
  }

  const handleChange = date => {
    setSelectedDate(date);
  }

  const isWeekday = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }

  return (
    <div className='calendar-container'>
      <Calendar
        onChange={handleChange}
        value={selectedDate}
        tileDisabled={({ date }) => !isWeekday(date)}
      />
      <button onClick={() => handleBooking(selectedDate)}>Book</button>
      <div>
        {bookings.map(booking => (
          <div key={booking}>{booking.toString()}</div>
        ))}
      </div>
    </div>
  );
};

export default BookingCalendar;
