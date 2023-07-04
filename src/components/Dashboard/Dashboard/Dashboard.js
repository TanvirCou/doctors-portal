import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import './Dashboard.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://doctors-portal-server-rho-ten.vercel.app/appointmentsByDate', {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({date: selectedDate, email: loggedInUser.email}),
        })
        .then(res => res.json())
        .then(data => setAppointments(data));
    }, [selectedDate])

    return (
        <section>
            <div className="container-fluid row containerStyle">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center mt-3">
                <div>
                    <Calendar className='shadow p-3 mb-5 bg-white rounded border border-light-subtle mt-3' onChange={handleDateChange} value={new Date()} />
                </div>
                </div>
                <div className="col-md-5 mt-4">
                    <AppointmentsByDate appointments={appointments}></AppointmentsByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;