import React from 'react';
import doctorPic from '../../../images/doctor-small.png';
import DoctorDetail from '../DoctorDetail/DoctorDetail';

const doctorData = [
    {
        name: 'Dr. Caudi',
        phone: '+123434555',
        img: doctorPic
    },
    {
        name: 'Dr. Caudi',
        phone: '+123434555',
        img: doctorPic
    },
    {
        name: 'Dr. Caudi',
        phone: '+123434555',
        img: doctorPic
    }
]

const Doctor = () => {
    return (
        <div className='pb-5'>
            <h4 style={{ textAlign: 'center', marginTop: '100px', marginBottom: '60px', color: '#1CC7C1' }}>Our Doctors</h4>
            <div className='row d-flex justify-content-center pl-5'>
                {
                    doctorData.map(doctor => <DoctorDetail doctor={doctor}></DoctorDetail>)
                }
            </div>
        </div>
    );
};

export default Doctor;