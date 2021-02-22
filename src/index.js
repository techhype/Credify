import ReactDOM from 'react-dom';
import createRoutes from './routes';

// fonts
import './fonts/Inter-SemiBold.ttf';   

const routes = createRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);