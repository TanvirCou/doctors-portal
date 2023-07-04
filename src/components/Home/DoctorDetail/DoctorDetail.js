import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const DoctorDetail = ({ doctor }) => {
    
    return (
        <div className='col-md-3'>
                <img style={{height: '250px'}} src={`data:image/png;base64,${doctor.image.img}`} className='img-fluid ml-3 w-75' alt="" />
                <h4 className='ml-5 pl-3 mt-2'>{doctor.name}</h4>
                <p className='ml-5'><FontAwesomeIcon className='text-primary' icon={faPhoneVolume}></FontAwesomeIcon>{doctor.phone}</p>
        </div>
    );
};

export default DoctorDetail;