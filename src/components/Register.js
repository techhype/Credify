import React from 'react'
import '../index.css'

const Register = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('Register Button clicked');
  }
  return (
    <div className="container">
      <h2>Register Screen</h2>
      <input type='email' name='Email' placeholder="Email"/>
      <input type='password' name='Password' placeholder="Password"/>
      <input type='submit' onClick={handleSubmit} value="Register" />
    </div>

  );
}

export default Register;