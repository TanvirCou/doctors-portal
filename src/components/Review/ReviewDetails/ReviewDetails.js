import React from 'react';

const ReviewDetails = ({review}) => {
    
    return (
        <div  className="card col-md-3 shadow p-3 mb-5 bg-body rounded mr-4">
            <div className="card-body">
                <p className="card-text">{review.review.review}</p>
                <div className='row mt-5'>
                    <div className='col-md-4'>
                        <img src={review.photoURL} className='img-fluid ml-3 mt-1 rounded-circle' alt="" style={{ width: '50px' }} />
                    </div>
                    <div className='col-md-8'>
                        <h6 style={{color:'#1CC7C1'}}>{review.name}</h6>
                        <small className='text-secondary'>{review.review.date}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;