import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUsers, faGripHorizontal, faFileLines, faArrowRightFromBracket, faUserPlus, faStar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://doctors-portal-server-rho-ten.vercel.app/isDoctor', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, []);

    // useEffect(()=>{
    //     const data = window.localStorage.getItem("isDoctor");
    //     if(data){
    //         setIsDoctor(JSON.parse(data));
    //     }
    // },[]);


    // useEffect(()=>{
    //     window.localStorage.setItem("isDoctor", JSON.stringify(isDoctor))
    // }, [isDoctor]);

    
    const handleLogout = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    }

    console.log(isDoctor);

    return (
        <div className='sidebar d-flex justify-content-between flex-column col-md-2 py-5 px-4' style={{ height: "100vh" }}>
            <ul className='list-unstyled'>
                {isDoctor ?
                    <div>
                        <li>
                            <Link to="/doctor/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faGripHorizontal} />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/patients" className="text-white">
                                <FontAwesomeIcon icon={faUsers} />
                                <span>Patients</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/prescriptions" className="text-white">
                                <FontAwesomeIcon icon={faFileLines} />
                                <span>Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctor/addDoctor" className="text-white">
                                <FontAwesomeIcon icon={faUserPlus} />
                                <span>Add doctor</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="text-white">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>Back to home</span>
                            </Link>
                        </li>
                    </div>
                    :
                    <div>
                        <li>
                            <Link to="/dashboard" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span>Appointment</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/patient/patientPrescriptions" className="text-white">
                                <FontAwesomeIcon icon={faFileLines} />
                                <span>My Prescriptions</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/patient/addReview" className="text-white">
                                <FontAwesomeIcon icon={faStar} />
                                <span>Add Review</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="text-white">
                                <FontAwesomeIcon icon={faHouse} />
                                <span>Back to home</span>
                            </Link>
                        </li>
                    </div>

                }
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <span onClick={handleLogout}>Logout</span>
                </Link>

            </div>
        </div>
    );
};

export default Sidebar;