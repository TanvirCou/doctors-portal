import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import PrescriptionDataTable from '../PrescriptionDataTable/PrescriptionDataTable';

const Prescription = ({patients}) => {
    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Prescription</h5>
            <PrescriptionDataTable patients={patients}></PrescriptionDataTable>
            </div>
        </div>
    );
};

export default Prescription;