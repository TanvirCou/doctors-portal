import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className='col-md-4 text-center p-5'>
            <img style={{height:'50px'}} src={service.img} alt="" />
            <h5 className='mt-3 mb-4'>{service.name}</h5>
            <p className='text-secondary'>{service.description}</p>
        </div>
    );
};

export default ServiceDetail;