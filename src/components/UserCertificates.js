import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Certificate from './Certificate'
import Popup from './Popup'

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
    <h1>Users Certificates</h1> 
    <button className="submit" onClick={()=>setTrigger(true)}>Send Mail</button>
    <div className="certcontainer">
      <Certificate certs={certs}/>
    </div> 
    <Popup trigger={trigger} setTrigger={setTrigger} empid={empid} setEmpid={setEmpid} />
    </>
  );
}

export default UserCertificates;