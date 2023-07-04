import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = ({reviews}) => {

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className='text-center mt-3 text-brand'>
                <h3>All Review</h3>
                </div>
                <div className='row d-flex justify-content-center mt-3 pt-3'>
                {
                    reviews.map(review => <ReviewDetails review={review}></ReviewDetails>)
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Review;