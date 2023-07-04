import React from 'react';
import Statistic from '../Statistic/Statistic';
import PatientListDataTable from '../PatientListDataTable/PatientListDataTable';

const MainDashboardDetailsPart = ({patients, reviews}) => {
    return (
        <div>
            <div>
                <h4 className='text-brand'>Statistic</h4>
                <Statistic patients={patients} reviews={reviews}></Statistic>
            </div>
            <div>
                <h4 className='text-brand'>Patient Details</h4>
                <PatientListDataTable patients={patients}></PatientListDataTable>
            </div>
        </div>
    );
};

export default MainDashboardDetailsPart;