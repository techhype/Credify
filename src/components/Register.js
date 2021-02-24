import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import '../index.css'
import '../css/Button.css'

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
    
    const url= "http://35.223.107.206:8000/register";
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
      <h2>Register Screen</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='Name' 
          value={name}
          placeholder="Name" 
          onChange={(e)=>setName(e.target.value)}/>
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
        <input type='submit' value='Register' className='submit'/>
      </form>
      {
        error ? <p style={{color:"red"}}> {error} </p> : ''
      }
    </div>

  );
}

export default Register;