import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const gettingUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/v1/auth/get`);
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