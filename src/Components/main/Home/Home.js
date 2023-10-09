import React, { useEffect,useState } from 'react'
import { Header } from '../Header/header'
// import { HomePage } from '../HomePage/Homepage'
import axios from 'axios';
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom';
export const Home = () => {
    let navigate = useNavigate()
    let userData = localStorage.getItem('userTanya')
    userData = JSON.parse(userData) 
    console.log(userData, "userDataa")

    useEffect(() => {
        getUsers()
    }, [])

    // const [users,setUsers] = useState([{
    //     name:"",
    //     phone:"",
    //     email:"",
    //     status:""
    // }])
    const [users,setUsers] = useState([])

    const getUsers = async () => {
        await axios.get('http://localhost:3500/api/client/getUserss',{
            headers: { Authorization: `${userData.token}` }
        })
            .then((response) => {
                console.log(response, "responsee")
                // let {name,phone,status,email} = response?.data?.data
                setUsers(response?.data?.data)
                toast.success(response?.data?.message ? response?.data?.message : "sucess")
            })
            .catch((err) => {
                console.log(err, "error")
                toast.error(err?.response?.data?.error ? err?.response?.data?.error : "something wrong")
                if(err?.response?.data?.error){
                    navigate('/login')
                }

            })
    };

    console.log(users,"userrr")
    return (
        <>
            <div>Welcome Emoji</div>
            <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>User List</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>

                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.status}</td>

                  {/* Add more columns as needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </>

    )
}
