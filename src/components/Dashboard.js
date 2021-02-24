import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../css/Button.css'
import '../index.css'

const Home = () => {
  // const [token,setToken] = useState();
  const history = useHistory();


  useEffect(()=>{
    window.addEventListener("popstate", () => {
      history.go(1);
    });
  },[]);

  const handleSubmit = () => {
    console.log('Logout button clicked');

    const localStorage = window.localStorage;

    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };

    const url = 'http://35.193.13.243:8000/logout'
    axios.post(url,null,options)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.removeItem('token');
        history.push("/login"); 
      })
      .catch(function (error) {
        console.log(error);
      });
    

  
  }
  return (
    <div className="container">
      <h1>HomeScreen</h1>
      <Link to="/upload">Upload Certificate</Link>
      <input type='button' onClick={handleSubmit} className='submit' value='Logout' />
    </div>
  );
}



export default Home;