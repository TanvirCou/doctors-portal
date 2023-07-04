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

const PatientListDataTableBody = ({ patient, index }) => {

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [prescription, setPrescription] = useState([]);
    const [hasPrescription, setHasPrescription] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/prescriptions')
            .then(res => res.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    const info = data[i];
                    if (info.id === patient._id) {
                        setHasPrescription(true);
                        setPrescription(info);
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

    return (
        <tbody>
            <tr>
                <td >{index + 1}</td>
                <td className='font-weight-bolder'>{patient.name}</td>
                <td>{patient.service}</td>
                <td>{patient.phone}</td>
                <td className='pt-0'>
                    {
                        hasPrescription ?
                            <div>
                                <button onClick={openModal} className='btn btn-brand text-white'>View</button>
                                <div>
                                    <Modal
                                        isOpen={modalIsOpen}
                                        onRequestClose={closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >
                                        <h2 className='text-brand text-center'>Prescription</h2>
                                        <div className='p-4' >
                                            <h6 className='font-weight-bolder'>Patient Name: {prescription.name}</h6>
                                            <h6>Patient Email: {prescription.email}</h6>
                                            <h6>Service: {prescription.service}</h6>
                                            <h6>Prescription updated: {prescription.date}</h6>
                                            <div className='mt-3'>
                                            <label htmlFor="" className='font-weight-bolder'>Prescription:</label>
                                            <h6 className='border font-weight-bolder rounded p-2'>{prescription.prescription}</h6>
                                            </div>
                                            <div className='text-right'>
                                            <button type="submit" onClick={closeModal} className='btn btn-brand text-white'>Close</button>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                            :
                            <h6 className='font-weight-bolder mt-2'>Not Added</h6>
                    }
                </td>
            </tr>
        </tbody>
    );
};

export default PatientListDataTableBody;