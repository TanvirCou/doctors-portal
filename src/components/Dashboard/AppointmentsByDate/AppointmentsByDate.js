import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div className='shadow p-3 mb-5 bg-white rounded'>
            <h2 className='text-brand text-center'>Appointments</h2>
           {
            appointments.length ?
                <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className='p-4'>
                    <h4 className='lead text-center'>No Appointments for this Date</h4>
                </div>
           }
        </div>
    );
};

export default AppointmentsByDate;