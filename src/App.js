import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Upload from './components/Upload';
import Profile from './components/Profile';
import AdminHome from './components/AdminHome'
import Users from './components/Users'
import UserCertificates from './components/UserCertificates'
import SendMail from './components/SendMail'

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AdminRoute from './routes/AdminRoute';

const App = () => {
  return (
    <Router>
      <PublicRoute restricted={false} component={Home} path="/" exact />
      <PublicRoute restricted={true} component={Register} path="/register" exact />
      <PublicRoute restricted={true} component={Login} path="/login" exact />
      <AdminRoute component={AdminHome} path="/admin" exact />
      <AdminRoute component={Users} path="/users" exact />
      <AdminRoute component={UserCertificates} path="/usercerts/:empid" exact />
      <AdminRoute component={SendMail} path="/sendmail" exact />
      <PrivateRoute component={Dashboard} path="/dashboard" exact />
      <PrivateRoute component={Upload} path="/upload" exact />
      <PrivateRoute component={Profile} path="/profile" exact />
    </Router>
  );
}

export default App;