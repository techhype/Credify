import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../css/Button.css'
import '../index.css'

const Login = (props) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const usercred ={email,password};
    const url= "http://35.223.107.206:8000/login";
    axios.post(url,usercred)
      .then(function (response) {
        console.log(JSON.stringify(response.data.user));

        // localstorage 
        window.localStorage.setItem('token',response.data.token);
        props.history.push('/dashboard');
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
      <h2>Login Screen</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='email' 
          name='Email' 
          value={email}
          placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value)}/>
        <input 
          type='password' 
          name='Password' 
          value={password}
          placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' value='Sign In' className='submit'/>
      </form>
      <Link to="/register">Create Account</Link>
      {
        error ? <p style={{color:"red"}}> {error} </p> : ''
      }
    </div>
  );
}



export default Login;