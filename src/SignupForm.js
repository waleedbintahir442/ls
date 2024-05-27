import React, { useState } from 'react';
import './SignupForm.css'; 
import PropTypes from 'prop-types'
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SignupForm(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem("username",JSON.stringify(username));
    localStorage.setItem("email",JSON.stringify(email));
    localStorage.setItem("password",JSON.stringify(password));
    navigate('/login');
    console.log('Form submitted:', { username, email, password });
  };
  const mystyle ={
    color: props.mode === 'dark' ? 'white' : 'white',
  }

  return (
    <div className="signup-form">
      <h2 style={mystyle}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" style={mystyle}>Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={mystyle}>Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={mystyle}>Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='b1' type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
