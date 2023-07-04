import React, { useContext, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import { UserContext } from '../../../../App';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviewInfo, setReviewInfo] = useState({});

    const handleBlur = (e) => {
        const info = {...reviewInfo};
        info[e.target.name] = e.target.value;
        setReviewInfo(info);
    };

    

    const handleSubmit = e => {
        reviewInfo.date = new Date().toDateString();
        const reviewDetails = {...loggedInUser, review: reviewInfo};
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(reviewDetails),
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert("Successfully review added");
                    document.getElementById("review").value = "";
                }
            })
        e.preventDefault();
    };

    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand ml-5 mt-3">Add Review</h5>
            <form action="" className='w-75 ml-5 mt-3' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" defaultValue={loggedInUser.name} className='form-control' onBlur={handleBlur} name="name" placeholder='Name*' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" defaultValue={loggedInUser.email} className='form-control' onBlur={handleBlur} name="email" placeholder='Email*' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="review">Your Review:</label>
                    <textarea type="text" className='form-control' onBlur={handleBlur} cols="30" rows="6" name="review" placeholder='Review*' id='review' required/>
                </div>
                <button type="submit" class="btn btn-brand text-white">Add Review</button>
            </form>
            </div>
        </div>
    );
};

export default AddReview;