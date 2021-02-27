import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'
import '../css/Button.css'
import '../index.css'
import '../css/dashboard.css'
const Home = () => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <Link to="/upload" style={{textDecoration:'none'}}>
      <button className='submit'>Upload Certificate</button>
      </Link>
      <Link to="/profile">
        <button type="button" className='submit'>My Certificates</button>
      </Link>
      <Logout className='logout'/>
    </div>
  );
}



export default Home;