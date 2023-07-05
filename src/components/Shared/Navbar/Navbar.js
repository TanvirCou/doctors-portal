import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../images/main-logo.png';

const Navbar = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div>
      <img src={mainLogo} alt="" className="img-fluid mt-2" style={{width:'50px', marginLeft:'140px'}} />
  </div>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <Link to="/" className="nav-link mr-5 text-dark font-weight-bold">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/appointment" className="nav-link mr-5 text-dark font-weight-bold">Appointment</Link>
      </li>
      <li className="nav-item">
      <Link to="/dashboard" className="nav-link mr-5 text-dark font-weight-bold">Dashboard</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link mr-5 text-white font-weight-bold">Login</Link>
      </li>
      <li className="nav-item">
      <Link to="/review" className="nav-link mr-5 text-white font-weight-bold">Review</Link>
      </li>
      <li className="nav-item">
      <Link to="/contactUs" className="nav-link mr-5 text-white font-weight-bold">Contact Us</Link>
      </li> 
    </ul>
  </div>
</nav>
    );
};

export default Navbar;