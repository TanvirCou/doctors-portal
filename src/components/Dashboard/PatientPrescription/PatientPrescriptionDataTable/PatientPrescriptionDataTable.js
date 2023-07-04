import React from 'react';
import PatientPrescriptionDataTableBody from '../PatientPrescriptionDataTableBody/PatientPrescriptionDataTableBody';

const PatientPrescriptionDataTable = ({appointments}) => {
    return (
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th className="text-secondary" scope='col'>Sr No</th>
                    <th className="text-secondary" scope='col'>Name</th>
                    <th className="text-secondary" scope='col'>Service</th>
                    <th className="text-secondary" scope='col'>Email</th>
                    <th className="text-secondary" scope='col'>Prescription</th>
                </tr>
            </thead>
                {
                    appointments.map((appointment, index) => <PatientPrescriptionDataTableBody appointment={appointment} index={index}></PatientPrescriptionDataTableBody> )
                }
        </table>
    );
};

export default PatientPrescriptionDataTable;