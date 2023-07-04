import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MainDashboardDetailsPart from '../MainDashboardDetailsPart/MainDashboardDetailsPart';

const MainDashboard = ({patients, reviews}) => {
    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <MainDashboardDetailsPart patients={patients} reviews={reviews}></MainDashboardDetailsPart>
            </div>
        </div>
    );
};

export default MainDashboard;