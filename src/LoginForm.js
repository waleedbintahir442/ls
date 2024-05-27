// LoginForm.js
import React, { useState } from 'react';
import './LoginForm.css'; // Import CSS file
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import Textform from './Textform';


export default function LoginForm(props){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const user=JSON.parse(localStorage.getItem("username"))
        const pass=JSON.parse(localStorage.getItem("password"))

        if (username===user && password===pass) {
            localStorage.setItem("log", true);
            navigate('/Textform');
        
        } else {
             window.alert("FAILED!");
             setUsername("");
             setPassword(""); 
        }
      };


    return (
       <>
       
        <form className="login-form" onSubmit={handleSubmit} >
        <h2 style={{
            color: props.mode === 'dark' ? 'white' : 'black',
            textAlign:'center',
            marginBottom:'80px',
        }}  >Login Page</h2>
            <input
                type="text"
                className="login-input"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                className="login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit"  className="login-button">Login</button>
        </form></>
    );
}

