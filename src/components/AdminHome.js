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
    <>
    <h1>Admin Home</h1>
    <form id='searchForm' onSubmit={handleSubmit}>
      <input
          className='tinput' 
          type='text' 
          name='Employee Id' 
          onChange={(e)=>setEmpid(e.target.value)}/>
      <input type='submit' value='Search' className='submit upload'/>
    </form>
    <button type='button'  onClick={()=>setShowUsers(!showUsers)} className='submit'>
    All Users
    </button>
    {showUsers ?
           <Users /> :
           null
    }
    <Logout/>
    </>
  );
}

export default AdminHome;