import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);
      
        fetch('https://doctors-portal-server-rho-ten.vercel.app/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        e.preventDefault();
    };

    return (
        <div className='container-fluid row'>
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand ml-5 mt-3">Add Doctor</h5>
                <form className='w-75 ml-5 mt-3' onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" onBlur={handleBlur} class="form-control" name='email' placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input type="text" onBlur={handleBlur} class="form-control" name='name' placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone Number</label>
                        <input type='text' onBlur={handleBlur} class="form-control" name='phone' placeholder="Phone Number" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload Image</label>
                        <input type="file" onChange={handleFileChange} class="form-control" placeholder="Picture" />
                    </div>
                    <button type="submit" class="btn btn-brand text-white">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;