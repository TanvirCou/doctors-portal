import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-3'>
            <div className="card shadow p-3 mb-5 bg-body rounded p-3 m-3" >
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{booking.name}</h5>
                    <h6>{booking.time}</h6>
                    <small>{booking.space} SPACES AVAILABLE</small>
                    <button onClick={openModal} className="btn btn-brand mt-3 text-white">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} booking={booking} date={date}></AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;