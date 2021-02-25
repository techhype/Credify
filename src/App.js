import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Upload from './components/Upload';
import Profile from './components/Profile';

import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {
  return (
    <Router>
      <PublicRoute restricted={false} component={Home} path="/" exact />
      <PublicRoute restricted={false} component={Register} path="/register" exact />
      <PublicRoute restricted={true} component={Login} path="/login" exact />
      <PrivateRoute component={Dashboard} path="/dashboard" exact />
      <PrivateRoute component={Upload} path="/upload" exact />
      <PrivateRoute component={Profile} path="/profile" exact />
    </Router>
  );
}

export default App;