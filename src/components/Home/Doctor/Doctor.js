import React, { useEffect, useState } from 'react';
import DoctorDetail from '../DoctorDetail/DoctorDetail';

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])


    return (
        <div className='pb-5'>
            <h4 style={{ textAlign: 'center', marginTop: '100px', marginBottom: '40px', color: '#1CC7C1' }}>Our Doctors</h4>
            <div className='row d-flex justify-content-center pl-5'>
                {
                    doctors.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail>)
                }
            </div>
        </div>
    );
};

export default Doctor;