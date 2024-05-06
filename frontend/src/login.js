import React, { useState } from 'react'
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');


    function handleRegister() {
        axios.post('http://localhost:5000/', { action: 'register', username, password })
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => {
                setStatus(error.response.data);
            });
    }

    function handleLogin() {
        axios.post('http://localhost:5000/', { action: 'login', username, password })
            .then(response => {
                setStatus(response.data);
            })
            .catch(error => {
                setStatus(error.response.data);
            });
    }

    return (
        <div>
            <header>Please Enter the information.</header>
            <div>{status}</div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;