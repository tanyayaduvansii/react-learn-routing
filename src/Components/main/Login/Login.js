import React, { useState } from 'react'
import axios from 'axios';
import {toast} from "react-toastify"
import { useNavigate } from 'react-router-dom';

export const Login = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
      console.log("handle change")
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to a server for registration
        console.log('Form submitted:', formData);

        await axios.post('http://localhost:3500/api/client/login', formData)
            .then((response) => {
                console.log(response, "responsee")
                localStorage.setItem('userTanya',JSON.stringify(response?.data?.data) )
                navigate('/home')
                toast.success(response?.data?.message?response?.data?.message:"sucess")
            })
            .catch((err) => {
                console.log(err, "error")
                toast.error(err?.response?.data?.error?err?.response?.data?.error:"something wrong")

            })
    };

  return (
    <>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                {loggedIn ? (
                  <p>Welcome, {"hye"}!</p>
                ) : (
                  <form>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSubmit}
                    >
                      Log In
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
