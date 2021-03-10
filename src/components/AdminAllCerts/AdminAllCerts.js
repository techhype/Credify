import React,{useState,useEffect} from 'react'
import Certificate from '../Certificate/Certificate'
import axios from 'axios'
import { deleteCertificate } from '../../utils/delete';

const AdminAllCerts = (props) => {
  const [certs,getCerts] = useState('');
  useEffect(()=>{
    getUserCerts();  
  },[]);

  const getUserCerts = () =>{
    const url = 'https://credify.tk/alluserscertificates';
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    let sbu;
    try{
      sbu = props.location.state.sbu ? {sbu:props.location.state.sbu} : null; 
    }
    catch(e){
      sbu=null; 
    }
    axios.post(url,sbu,options)
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
        <Certificate certs={certs} deleteCertificate={deleteCertificate}/>
      </div> 
    </>
  );
}

export default AdminAllCerts;