import React from 'react'
import {isAdmin, isLogin} from '../utils/index'
import Login from './Login';
import Dashboard from './Dashboard';
import AdminHome from './AdminHome';


const Home = () => {
  if(isAdmin() && isLogin())
    return <AdminHome />
  else if(isLogin() && isAdmin()===false)
    return <Dashboard/>;
  else 
    return <Login/>;
}

export default Home;
