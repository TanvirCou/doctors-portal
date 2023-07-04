import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '5px 5px 10px lightgrey',
    },
};

Modal.setAppElement('#root');

const PrescriptionDataTableBody = ({ patient, index }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [status, setStatus] = useState("Not Added");
    const [user, setUser] = useState({
        prescription: '',
        success: false
    });

    useEffect(() => {
        fetch('https://doctors-portal-server-rho-ten.vercel.app/prescriptions')
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const info = data[i];
                    if (info.id === patient._id && info.success) {
                        setStatus("Updated");
                    }
                }
            })
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleBlur = (e) => {
        const newUserInfo = { ...user };
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
    };

    const handleSubmit = (e) => {
        user.id = patient._id;
        user.name = patient.name;
        user.email = patient.email;
        user.service = patient.service;
        user.success = true;
        user.date = new Date().toDateString();
        fetch('https://doctors-portal-server-rho-ten.vercel.app/addPrescription', {
            method: 'POST',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal();
                    alert("Successfully added");
                    setStatus("Updated")
                }
            })
        e.preventDefault();
    };

    return (
        <tbody>
            <tr>
                <td >{index + 1}</td>
                <td className='font-weight-bolder'>{patient.name}</td>
                <td>{patient.service}</td>
                <td>{patient.email}</td>
                <td className='font-weight-bolder'>{status}</td>
                <td className='pt-0'>
                    <button onClick={openModal} className='btn btn-brand text-white'>Prescription</button>
                    <div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 className='text-brand text-center'>Prescription</h2>
                            <form className='p-4' action="" onSubmit={handleSubmit}>
                                <h6 className='font-weight-bolder'>Patient Name: {patient.name}</h6>
                                <h6>Patient Email: {patient.email}</h6>
                                <h6>Service: {patient.service}</h6>
                                <div className='form-group'>
                                    <label htmlFor="prescription">Prescription:</label>
                                    <textarea className='form-control' onBlur={handleBlur} cols="30" rows="6" type="text" name="prescription" placeholder='Prescription*' required/>
                                </div>
                                <div className='form-group text-right'>
                                    <button type="submit" className='btn btn-brand text-white'>Add Prescription</button>
                                </div>
                            </form>
                        </Modal>
                    </div>
                </td>
            </tr>
        </tbody>
    );
};

export default PrescriptionDataTableBody;