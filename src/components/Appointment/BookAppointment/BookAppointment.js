import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]


const BookAppointment = ({ date }) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Available Appointments on {date.toDateString()}</h2>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        bookings.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;