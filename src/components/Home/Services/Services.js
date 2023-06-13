import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const servicesData = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: cavity
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: whitening
    },
]

const Services = () => {
    return (
        <section className='mt-4'>
            <div className="text-center">
                <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
                <h2 style={{color:'#3A4256', marginTop:'18px'}}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
            <div className='row w-75 mt-4'>
            {
                servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;