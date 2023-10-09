import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

const navigate = useNavigate()

    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         email: '',
    //         number: "",
    //         password: ""
    //     },
    //     validationSchema: Yup.object({
    //         email: Yup.string().email('Invalid email address').required('Required'),
    //         name: Yup.string().required('Required'),
    //         number: Yup.number().required('Required'),
    //         password: Yup.string().required('Required'),



    //     }),
    //     onSubmit: (values) => {
    //         console.log(values,"formikk value");
    //         handleSubmit()
    //         //   toast.success("Verification code send succesfully to Registered Email id");
    //         //   setVerify(true);
    //     },
    // });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a server for registration
        console.log('Form submitted:', formData);


        await axios.post('http://localhost:3500/api/client/save', formData)
            .then((response) => {
                console.log(response, "responsee")
                navigate('/login')
                toast.success(response?.data?.message?response?.data?.message:"sucess")
            })
            .catch((err) => {
                console.log(err, "error")
                toast.error(err?.response?.data?.error?err?.response?.data?.error:"something wrong")

            })
    };



    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Sign Up</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Sign Up</button>
                                <span type="submit" className=""> <a href='/login'> Login</a> </span>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

