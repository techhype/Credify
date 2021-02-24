import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import createRoutes from './routes';

// fonts
import './fonts/Inter-SemiBold.ttf';   

const App = () => {
  return createRoutes();
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);