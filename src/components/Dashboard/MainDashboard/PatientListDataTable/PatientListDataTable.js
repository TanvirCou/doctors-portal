import React from 'react';
import PatientListDataTableBody from '../PatientListDataTableBody/PatientListDataTableBody';

const PatientListDataTable = ({patients}) => {
    return (
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th className="text-secondary" scope='col'>Sr No</th>
                    <th className="text-secondary" scope='col'>Name</th>
                    <th className="text-secondary" scope='col'>Service</th>
                    <th className="text-secondary" scope='col'>Phone</th>
                    <th className="text-secondary" scope='col'>Prescription</th>
                </tr>
            </thead>
                {
                    patients.map((patient, index) => <PatientListDataTableBody patient={patient} index={index}></PatientListDataTableBody> )
                }
        </table>
    );
};

export default PatientListDataTable;