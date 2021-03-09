import React from 'react'
import {Link} from 'react-router-dom'
import Logout from '../Logout/Logout'
import '../../css/Button.css'
import './dashboard.css'
import uploadImg from '../../img/upload.png'
import profileImg from '../../img/certificates.png'
const Home = () => {
  return (
    <div className="dcontainer">
      <h1 id='dashboard-title'>Dashboard</h1>
      <div className="linkbtn">
        <div className='card card-3'>
          <Link to="/upload" style={{textDecoration:'none'}}>
          <img className='btnImg' src={uploadImg} alt="upload"/>
          <button className='submit s__btn'>Upload Certificate</button>
          </Link>
        </div>
        <div className='card card-3'>
          <Link to="/profile" style={{textDecoration:'none'}}>
            <img className='btnImg' src={profileImg} alt="profile"/>
            <button type="button" className='submit s__btn'>My Certificates</button>
          </Link>
        </div>
        {/* <div className='card card-3'> */}
          <Link to="/quizhome" style={{textDecoration:'none'}}>
            {/* <img className='btnImg' src={profileImg} alt="profile"/> */}
            <button type="button" className='submit s__btn'>Quiz Home</button>
          </Link>
        {/* </div> */}
      </div>
      <Logout className='logout'/>
    </div>
  );
}



export default Home;