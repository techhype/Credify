import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';



const createRoutes = () => (
  <Router>
    <Switch>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default createRoutes;
