import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Upload from './components/Upload/Upload';
import Profile from './components/Profile/Profile';
import AdminHome from './components/AdminHome/AdminHome'
import AdminDashboard from './components/AdminDashboard/AdminDashboard'
import AdminAllCerts from './components/AdminAllCerts/AdminAllCerts'
import Users from './components/Users/Users'
import UserCertificates from './components/UserCertificates/UserCertificates'
import SendMail from './components/SendMail/SendMail'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AdminRoute from './routes/AdminRoute';
import AdminExpired from './components/AdminExpired/AdminExpired';
import AdminExpiring from './components/AdminExpiring/AdminExpiring';

const App = () => {
  return (
    <Router>
      <PublicRoute restricted={false} component={Home} path="/" exact />
      <PublicRoute restricted={true} component={Register} path="/register" exact />
      <PublicRoute restricted={true} component={Login} path="/login" exact />
      <AdminRoute component={AdminHome} path="/admin" exact />
      <AdminRoute component={AdminDashboard} path="/admindash" exact />
      <AdminRoute component={AdminAllCerts} path="/adminallcerts" exact />
      <AdminRoute component={AdminExpired} path="/adminexpired" exact />
      <AdminRoute component={AdminExpiring} path="/adminexpiring" exact />
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