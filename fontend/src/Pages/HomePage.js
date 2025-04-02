import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const gettingUser = async () => {
        try {
            const { data } = await axios.get(`https://vercel-deployment-backend.onrender.com/api/v1/auth/get`);
            if (data?.success) {
                setUsers(data?.user);
            }
        } catch (error) {
            alert(error?.responce?.data?.mesage);
        }
    }
    useEffect(() => {
        gettingUser();
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>

                    <h1 className='text-center'>User List</h1>
                    <button className='btn btn-primary' onClick={navigator(`/create`)}>Add User</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, i) => (

                                <tr>
                                    <th scope="row">1</th>
                                    <td>{u.fristName + " " + u.lastName}</td>
                                    <td>{u.email}</td>
                                    <td>{u.mobileNo}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HomePage