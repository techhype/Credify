import React from 'react'
import {isAdmin, isLogin} from '../../utils/index'
import Login from '../Login/Login';
import Dashboard from '../Dashboard/Dashboard';
import AdminHome from '../AdminHome/AdminHome';


const Home = () => {
  if(isAdmin() && isLogin())
    return <AdminHome />
  else if(isLogin() && isAdmin()===false)
    return <Dashboard/>;
  else 
    return <Login/>;
}

export default Home;
