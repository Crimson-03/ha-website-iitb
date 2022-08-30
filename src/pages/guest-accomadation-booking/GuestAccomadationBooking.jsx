import React from 'react'
import { useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';

function GuestAccomadationBooking() {
  useEffect(() => {
    document.title = "Guest House Accomadation Booking | Hostel Affairs";
  });
  return (
      <div>
        <Navbar/>
        <div className="container text-white d-flex flex-column my-5">
            <h1 className="title text-warning text-center w-75 m-auto pb-3 border-bottom">Guest Accomodation</h1>

            <p className="intro m-4 p-4">
              IIT Bombay has witnessed a large increase in the intake of students in this academic year, which resulted in a gradual decrease in the guest rooms and vacant rooms available in the hostels. Since we have very few Guest Room / Vacant Rooms available in the Hostels, The Institute has taken a call to shut down the Guest Booking System. This was decided in order to keep guest rooms available for Institute Guests, Students Parents, Students Spouse or Interview Applicants.
            </p>

            <h6 className='mx-4 px-4'>These are the following rules for Guest Room Bookings:</h6>
            <ul className='mx-4 px-4'>
                <li className='mx-4 px-4'>Guest Rooms can be booked only for parents.</li>
                <li className='mx-4 px-4'>Siblings (Brothers / Sisters) accompanying parents will be allowed for Guest booking.</li>
                <li className='mx-4 px-4'>Guest Room can be booked for spouse (with valid marriage certificate)</li>
            </ul>

            <p className="mx-4 my-3 px-4">
              Students have to submit an offline application to Associate Dean Student Affairs attaching all necessary documents. Students have to submit the application at least 1 week prior the date of booking to avoid last minute constraints. Guest room booking is allowed only 20 days proir the date of booking.
            </p>

            <p className="mx-4 px-4 text-info">Thank You</p>

        </div>
    </div>
  )
}

export default GuestAccomadationBooking