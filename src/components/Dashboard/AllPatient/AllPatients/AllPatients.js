import React from 'react';
import AllPatientsDataTable from '../AllPatientsDataTable/AllPatientsDataTable';
import Sidebar from '../../Sidebar/Sidebar';


const AllPatients = ({patients}) => {
    
    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Patients</h5>
            <AllPatientsDataTable patients={patients}></AllPatientsDataTable>
            </div>
        </div>
    );
};

export default AllPatients;