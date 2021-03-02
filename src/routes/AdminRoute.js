import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAdmin, isLogin } from '../utils/index';


const AdminRoute = ({component: Component, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            isAdmin()===true && isLogin()===true ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default AdminRoute;