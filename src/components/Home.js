import React,{useEffect} from 'react'
import Login from './Login';
import Dashboard from './Dashboard';
import { useHistory } from "react-router-dom";



const Home = () => {
  const token = window.localStorage.getItem('token') || null;

  if(token)
    return <Dashboard/>;
  else 
    return <Login/>;
}

export default Home;
