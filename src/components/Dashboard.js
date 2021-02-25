import React,{useState,useEffect} from 'react'
import {isLogin,logout} from '../utils/index'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'

import '../css/Button.css'
import '../index.css'

const Home = () => {
  const [isLoggedin,setIsLoggedin] = useState(isLogin()); 
  
  let history = useHistory();

  const handleSubmit = () => {
    console.log('Logout button clicked');

    const localStorage = window.localStorage;

    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };

    const url = 'https://credifybe.tk/logout'
    axios.post(url,null,options)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setIsLoggedin(false);
        logout();
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
      <Link to="/profile">
        <button type="button" className='submit'>My Certificates</button>
      </Link>
    </div>
  );
}



export default Home;