import React,{useState} from 'react'
import Logout from '../components/Logout'
import Users from './Users'
import {useHistory} from 'react-router-dom'

import '../css/adminhome.css'


const AdminHome = () => {
  const [empid,setEmpid] = useState(0);
  const [showUsers,setShowUsers] = useState(false);

  let history=useHistory();

  const handleSubmit = (e) =>{
    e.preventDefault();
    document.getElementById('searchForm').reset();
    history.push(`/usercerts/${empid}`)
  }
  return (
    <div className='admin-container'>
      <h1 style={{marginTop:'70px'}}>Admin Dashboard</h1>
      <form id='searchForm' onSubmit={handleSubmit}>
        <input
            className='tinput search-input' 
            type='text' 
            name='Employee ID' 
            placeholder='Employee Id' 
            onChange={(e)=>setEmpid(e.target.value)}/>
        <input type='submit' value='Search' className='submit search-btn'/>
      </form>
      <Users /> 
      <Logout/>
    </div>
  );
}

export default AdminHome;