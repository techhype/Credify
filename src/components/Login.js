import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useHistory } from "react-router-dom";

import '../css/login.css'
import '../css/Button.css'
import '../index.css'

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  let history = useHistory();
  const handleSubmit = async(e) =>{
    e.preventDefault();
    const usercred ={email,password};
    const url= "https://credifybe.tk/login";
    axios.post(url,usercred)
      .then(function (response) {
        console.log(response.status);
        console.log(JSON.stringify(response.data.user));

        // localstorage 
        window.localStorage.setItem('token',response.data.token);
        history.push('/dashboard')  
      })
      .catch(function (error) {
        console.log(error.response.status,error.response.data.email);
        Object.entries(error.response.data).forEach(([key,value]) => {
          setError(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value[0]}`);
        })
      });
  }



  return (
    <div className="container">
      <div className="card card-3">
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input 
          className='tinput'
          type='email' 
          name='Email' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required/>
        <label htmlFor="Password">Password</label>
        <input 
          className='tinput'
          type='password' 
          name='Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required/>
        <input type='submit' value='Sign In' className='submit'/>
      </form>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <button type='button' className='submit'>
      Create Account
      </button>
      </Link>
      {
        error ? <p style={{color:"red"}}> {error} </p> : ''
      }
      </div>
    </div>
  );
}



export default Login;