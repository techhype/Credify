import React from 'react'
import {isLogin} from '../utils/index'
import Login from './Login';
import Dashboard from './Dashboard';



const Home = () => {
  console.log(isLogin());
  if(isLogin())
    return <Dashboard/>;
  else 
    return <Login/>;
}

export default Home;
