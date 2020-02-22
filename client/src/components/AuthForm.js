import React, {useState} from 'react';
import axios from 'axios';


export default function AuthForm({role}) {
    const [authInfo, setAuthInfo] =useState({
        username: '',
        password:  ''
    })
    const handleChange = e => {
        setAuthInfo({
            ...authInfo,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios.post('/api/login', authInfo)
        .then(res => 
            console.log(res)
            // localStorage.setItem('token', res.data.token))
        )
        .catch(err =>console.log(err));
    }
    return(
        <div className= 'auth-page'>
            <form onSubmit={handleSubmit}>
                <h1>Please {role}</h1>
                <input
                    name="username"
                    value={authInfo.username}
                    onChange= {handleChange} />

                    <input
                    name="password"
                    value={authInfo.password}
                    onChange= {handleChange} />
            </form>
        </div>
    )
}