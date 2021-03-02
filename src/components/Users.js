import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Popup from './Popup'

import '../css/users.css'
import userImg from '../img/user.jpg'

const Users = () => {
  let [allUsers,setAllUsers] = useState('');
  let [trigger,setTrigger] = useState(false)
  let [empid,setEmpid] = useState('')

  useEffect(()=>{
    const url='https://credifybe.tk/allusers'
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.get(url,options)
      .then(response => {
        console.log(response);
        setAllUsers(response.data);
      })
      .catch(function (error) {
        console.log(error.response.status,error.response);
      });
  },[])

  const handleContactClick = (employeeid) => {
    setTrigger(true);
    setEmpid(employeeid);
  }
  return(
    <>
    <h1>Users</h1>
    <Popup trigger={trigger} setTrigger={setTrigger} empid={empid} setEmpid={setEmpid} />
    { allUsers.length>0  ?
      (
        allUsers.map(user=> 
        <div key={user.id} className="ucard">
          <div className="card__body">
            <div className="card__img">
              <img src={userImg} alt=""/>
            </div>
            <span className="card__name">{user.name}</span>
            <span className="card__email">{user.empid}</span>
            <span className="card__empid">{user.email}</span>
            <div className="card__skills">
              <span className="card__skills--item">Cloud</span>
              <span className="card__skills--item">Devops</span>
              <span className="card__skills--item">GCP</span>
            </div>
            <div className="card__footer">
              <a href="#" title="" className="card__btn btn btn-primary">View Profile</a>
              <a onClick={()=>handleContactClick(user.empid)} className="card__btn btn contactbtn">Contact</a>
            </div>
          </div>
        </div>)
      )
      : 
      <div className="ucard">
        <div className="card__body">
          <div className="card__img skeleton">
            <img src="goku.png" alt="" />
          </div>
          <span className="card__name skeleton">Place Holder</span>
          <span className="card__empid skeleton">1234567</span>
          <span className="card__email skeleton">placeholder@company.com</span>
          <div className="card__skills skeleton">
            <span className="card__skills--item">3D</span>
            <span className="card__skills--item">UI Design</span>
            <span className="card__skills--item">Graphics</span>
          </div>
          <div className="card__footer skeleton">
            <a href="#" title="" className="card__btn btn btn-primary">View Profile</a>
            <a href="#" title="" className="card__btn btn">Contact</a>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default Users;