import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '5px 5px 10px lightgrey',
  },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, booking, date }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    data.service = booking.name;
    data.date = date;
    data.created = new Date();

    fetch('https://doctors-portal-server-rho-ten.vercel.app/addAppointment', {
      method: 'POST',
      headers: {'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
      }
    })
  }


  const navigate = useNavigate();
  const handleGoToDashboard = () => {
    navigate('/dashboard');
  }


  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-brand text-center'>{booking.name}</h2>
        <p className='text-center text-secondary'><small>{date.toDateString()}</small></p>
        <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input {...register("name", { required: true })} name='name' placeholder='Your Name' className='form-control' />
            {errors.name && <span className='text-danger'>This field is required</span>}
          </div>

          <div className="form-group">
            <input {...register("phone", { required: true })} name='phone' placeholder='Phone Number' className='form-control' />
            {errors.phone && <span className='text-danger'>This field is required</span>}
          </div>

          <div className="form-group">
            <input {...register("email", { required: true })} name='email' placeholder='Email' className='form-control' />
            {errors.email && <span className='text-danger'>This field is required</span>}
          </div>

          <div className="row form-group">
            <div className="col-md-4">
              <select {...register("gender", { required: true })} name="gender" className='form-control'>
                <option value="Not set">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <input {...register("age", { required: true })} name='age' placeholder='Your age' className='form-control' />
              {errors.age && <span className='text-danger'>This field is required</span>}
            </div>
            <div className="col-md-4">
              <input {...register("weight", { required: true })} name='weight' placeholder='Your Weight' className='form-control' />
              {errors.weight && <span className='text-danger'>This field is required</span>}
            </div>

          </div>
          <div className="form-group text-right">
            <button onClick={handleGoToDashboard} type="submit" className='btn btn-brand text-white'>Send</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;