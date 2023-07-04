import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {

    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>APPOINTMENT</h1>
                <div>
                    <Calendar className='shadow p-3 mb-5 bg-body rounded border border-light-subtle mt-3' onChange={handleDateChange} value={new Date()} />
                </div>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;