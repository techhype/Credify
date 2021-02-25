import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Upload from './components/Upload';
import Profile from './components/Profile';

  
const createRoutes = () => (
    <Router>
      <Switch>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
);

export default createRoutes;
