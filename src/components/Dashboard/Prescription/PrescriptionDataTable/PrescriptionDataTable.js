import React from 'react';
import PrescriptionDataTableBody from '../PrescriptionDataTableBody/PrescriptionDataTableBody';

const PrescriptionDataTable = ({ patients }) => {
    return (
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th className="text-secondary" scope='col'>Sr No</th>
                    <th className="text-secondary" scope='col'>Name</th>
                    <th className="text-secondary" scope='col'>Service</th>
                    <th className="text-secondary" scope='col'>Email</th>
                    <th className="text-secondary" scope='col'>Status</th>
                    <th className="text-secondary" scope='col'>Prescription</th>
                </tr>
            </thead>
                {
                    patients.map((patient, index) => <PrescriptionDataTableBody patient={patient} index={index}></PrescriptionDataTableBody> )
                }
        </table>
    );
};

export default PrescriptionDataTable;