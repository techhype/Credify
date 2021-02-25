import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import '../index.css'
import '../css/Button.css'
import '../css/login.css'

const Register = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');

  const history = useHistory();

  const handleSubmit = (e) =>{
    
    e.preventDefault();
    const usercred = {name, email, password};
    console.log('Register Button clicked');
    
    const url= "https://credifybe.tk/register";
    axios.post(url,usercred)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push('/login');
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
      <h2>Create your Credify account</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input 
          className='tinput' 
          type='text' 
          name='Name' 
          value={name}
          onChange={(e)=>setName(e.target.value)}/>
        <label htmlFor="Email">Email</label>
        <input 
          className='tinput' 
          type='email' 
          name='Email' 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}/>
        <label htmlFor="Password">Password</label>
        <input  
          className='tinput'
          type='password' 
          name='Password' 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}/>
        <input type='submit' value='Register' className='submit'/>
      </form>
      {
        error ? <p style={{color:"red"}}> {error} </p> : ''
      }
      </div>
    </div>

  );
}

export default Register;