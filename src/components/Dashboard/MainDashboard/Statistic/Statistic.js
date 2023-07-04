import React, { useEffect, useState } from 'react';

const Statistic = ({patients, reviews}) => {
    const [prescriptions, setPrescriptions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/prescriptions')
            .then(res => res.json())
            .then(data => setPrescriptions(data))
    }, []);

    const patientNumber = patients.length;
    const totalPatient = ('0' + patientNumber).slice(-2);

    const reviewNumber = reviews.length;
    const totalReview = ('0' + reviewNumber).slice(-2);

    const prescriptionNumber = prescriptions.length;
    const totalPrescription = ('0' + prescriptionNumber).slice(-2);

    return (
        <div className='row d-flex justify-content-center mt-3 pt-3'>
            <div className="row col-md-3 shadow p-3 mb-5 bg-success rounded mr-5">
                <div className='ml-4 text-white'>
                <h1>{totalPatient}</h1>
                </div>
                <span className='text-center ml-5 pl-2 text-white'><h4>Total <br /> Patient</h4></span>   
            </div>
            <div className="row col-md-3 shadow p-3 mb-5 bg-info rounded mr-5">
                <div className='ml-4 text-white'>
                <h1>{totalReview}</h1>
                </div>
                <span className='text-center ml-5 pl-2 text-white'><h4>Total <br /> Review</h4></span>   
            </div>
            <div className="row col-md-3 shadow p-3 mb-5 bg-primary rounded mr-5">
                <div className='ml-4 text-white'>
                <h1>{totalPrescription}</h1>
                </div>
                <span className='text-center ml-4 text-white'><h4>Prescription <br /> Updated</h4></span>   
            </div>
        </div>
    );
};

export default Statistic;