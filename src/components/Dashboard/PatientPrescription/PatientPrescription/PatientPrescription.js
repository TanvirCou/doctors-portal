import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import PatientPrescriptionDataTable from '../PatientPrescriptionDataTable/PatientPrescriptionDataTable';
import { UserContext } from '../../../../App';

const PatientPrescription = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('https://doctors-portal-server-rho-ten.vercel.app/appointmentsByEmail', {
        method: 'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({email: loggedInUser.email}),
        })
        .then(res => res.json())
        .then(data => setAppointments(data));
    }, [])

    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand ml-2">My Prescriptions</h5>
            <PatientPrescriptionDataTable appointments={appointments}></PatientPrescriptionDataTable>
            </div>
        </div>
    );
};

export default PatientPrescription;