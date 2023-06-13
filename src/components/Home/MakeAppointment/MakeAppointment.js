import React from 'react';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <div className='row appointment-container'>
            <div className='col-md-4 offset-md-2 d-none d-md-block'>
                <img src={doctor} alt="" className="img-fluid" />
            </div>
            <div className='col-md-5'>
                <h6 style={{ color: '#1CC7C1' }} className='mt-5 mb-3'>APPOINTMENT</h6>
                <h1 className='text-white'>Make an appointment  <br /> Today</h1>
                <p className='mt-2 mb-5 text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo rerum ad aliquid ullam officia expedita.</p>
                <button className="btn btn-primary">Learn more</button>
            </div>
        </div>

    );
};

export default MakeAppointment;