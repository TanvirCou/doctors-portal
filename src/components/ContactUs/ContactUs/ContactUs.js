import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='contact-container my-2 py-5'>
                <div className='text-center text-white mb-5'>
                    <h5 style={{ color: '#1CC7C1' }}>CONTACT US</h5>
                    <h2>Always Connect With Us</h2>
                </div>
                <div className='col-md-7 mx-auto pt-2'>
                    <form action="">
                        <div className='form-group'>
                            <input className='form-control' type="text" name="" placeholder='Email Address*' />
                        </div>
                        <div className='form-group'>
                            <input className='form-control' type="text" name="" placeholder='Subject*' />
                        </div>
                        <div className='form-group'>
                            <textarea className='form-control' cols="30" rows="6" type="text" name="" placeholder='Your Message*' />
                        </div>
                        <div className='form-group text-center'>
                            <button type="button" className='btn btn-brand text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;
