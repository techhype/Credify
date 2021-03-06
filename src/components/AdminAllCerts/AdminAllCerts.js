import React,{useState,useEffect} from 'react'
import Certificate from '../Certificate/Certificate'
import axios from 'axios'

const AdminAllCerts = () => {
  const [certs,getCerts] = useState('');
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
    axios.post(url,null,options)
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
      <h1 style={{fontSize:'1.8em',marginTop:'25px',marginLeft:'50px'}}>All Certificates</h1>
      <div className="certcontainer">
        <Certificate certs={certs}/>
      </div> 
    </>
  );
}

export default AdminAllCerts;