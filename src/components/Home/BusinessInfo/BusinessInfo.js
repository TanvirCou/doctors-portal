import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10036, USA',
        icon: faLocationDot,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15263778373',
        icon: faPhoneVolume,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='row w-75'>
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;