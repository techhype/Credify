import React from 'react'
import {Link} from 'react-router-dom'
import '../index.css'

const Login = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Sign In button clicked');
  }
  return (
    <div className="container">
      <h2>Login Screen</h2>
      <input type='email' name='Email' placeholder="Email"/>
      <input type='password' name='Password' placeholder="Password"/>
      <input type='submit' onClick={handleSubmit} value='Sign in' />
      <Link to="/register">Create Account</Link>
    </div>

  );
}

export default Login;