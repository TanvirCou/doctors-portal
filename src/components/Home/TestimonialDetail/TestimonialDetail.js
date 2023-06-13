import React from 'react';

const TestimonialDetail = ({ testimonial }) => {
    return (
        <div  className="card col-md-3 shadow p-3 mb-5 bg-body rounded mr-4">
            <div className="card-body">
                <p className="card-text">{testimonial.quote}</p>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <img src={testimonial.img} className='img-fluid ml-3 mt-1' alt="" style={{ width: '50px' }} />
                    </div>
                    <div className='col-md-8'>
                        <h6 style={{color:'#1CC7C1'}}>{testimonial.name}</h6>
                        <small className='text-secondary'>{testimonial.from}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetail;