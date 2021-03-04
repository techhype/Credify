import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Certificate from '../Certificate/Certificate'
import Popup from '../Popup/Popup'
import './UserCertificates.css'

const UserCertificates = (props) => {
  const [certs,getCerts] = useState('');
  const [empid,setEmpid]=useState(props.match.params.empid);
  let [trigger,setTrigger] = useState(false);
  useEffect(()=>{
    getUserCerts();  
  },[]);

  const getUserCerts = () =>{
    const url = 'https://credifybe.tk/alluserscertificates';
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.post(url,{empid},options)
    .then(response => {
      console.log(response.data);
      getCerts(response.data);
    })
    .catch(function (error) {
      console.log(error.response.status,error.response);
    });
  }
  return(
    <>
    <h1 className='uc-title'>Users Certificates</h1> 
    <button className="submit popup-btn" onClick={()=>setTrigger(true)}>Send Mail</button>
    <div className="certcontainer">
      <Certificate certs={certs}/>
    </div> 
    <Popup trigger={trigger} setTrigger={setTrigger} empid={empid} setEmpid={setEmpid} />
    </>
  );
}

export default UserCertificates;