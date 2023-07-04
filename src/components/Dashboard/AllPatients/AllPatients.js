import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AllPatientsDataTable from '../AllPatientsDataTable/AllPatientsDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    }, [])
    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Patients</h5>
            <AllPatientsDataTable appointments={appointments}></AllPatientsDataTable>
            </div>
        </div>
    );
};

export default AllPatients;