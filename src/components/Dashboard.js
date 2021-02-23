import React,{useState,useEffect} from 'react'
// import axios from 'axios'

import '../css/Button.css'
import '../index.css'

const Home = () => {
  // const [token,setToken] = useState();

  useEffect(()=>{
    console.log('Have to code');
  },[]);

  const handleSubmit = () => {
    console.log('Logout button clicked');

    // using this code temporarily.Worst case method
    const localStorage = window.localStorage;
    localStorage.removeItem('token');

    // var config = {
    // method: 'get',
    // url: 'http://35.223.107.206:8000/logout',
    // headers: { 
    //   'Authorization': `TOKEN ${token}`
    //   }
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  
  }
  return (
    <div className="container">
      <h1>HomeScreen</h1>
      <input type='button' onClick={handleSubmit} className='submit' value='Logout' />
    </div>
  );
}



export default Home;