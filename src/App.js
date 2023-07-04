import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/Dashboard/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute'
import Prescription from './components/Dashboard/Prescription/Prescription/Prescription';
import PatientPrescription from './components/Dashboard/PatientPrescription/PatientPrescription/PatientPrescription';
import AddReview from './components/Dashboard/AddReview/AddReview/AddReview';
import Review from './components/Review/Review/Review';
import ContactUs from './components/ContactUs/ContactUs/ContactUs';
import MainDashboard from './components/Dashboard/MainDashboard/MainDashboard/MainDashboard';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setPatients(data))
    }, []);

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, []);


  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/review" element={<Review reviews={reviews}/>} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/doctor/dashboard" element={<MainDashboard patients={patients} reviews={reviews}/>} />
        <Route path="/doctor/patients" element={<AllPatients />} />
        <Route path="/doctor/addDoctor" element={<AddDoctor />} />
        <Route path="/doctor/prescriptions" element={<Prescription patients={patients}/>} />
        <Route path="/patient/patientPrescriptions" element={<PatientPrescription/>} />
        <Route path="/patient/addReview" element={<AddReview />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
