import React,{useState,useEffect} from 'react'
import axios from 'axios'

import '../index.css'
import '../css/Button.css'
import Toggle from '../utils/Toggle';
import CustomSelect from '../utils/CustomSelect';

const Upload = () => {
  const [csproviders, setcsproviders] = useState(["GCP", "AWS", "Azure"])
  const [userCertDetails,setuserCertDetails] = useState(
    {
      csp: '',
      certlevel: '',
      certname: '',
      certid: '',
      dateofcert: '',
      expiry: '',
      visibility: false,
      certFile: null
    });

  const handleToggle = (toggleResult) => {
    setuserCertDetails({...userCertDetails,visibility:toggleResult});
  }
  const handleCustomSelect = (csp,certlevel,certname) => {
    setuserCertDetails({...userCertDetails,csp,certlevel,certname});
  }

  const handleSubmit = (e) =>{
    
    e.preventDefault();
    // const usercred = {name, email, password};
    console.log('upload Button clicked',userCertDetails);
    
    var options = {
      headers: { 
        'Authorization': 'TOKEN 14293db7d6a66547d9cc4d661a690c95ff82248482563592f92099c755c8fc81'
      }
    };
    const formData = new FormData();
    formData.append("pdf", userCertDetails.certFile);
    formData.append("csp", userCertDetails.csp);
    formData.append("level", userCertDetails.certlevel);
    formData.append("certname", userCertDetails.certname);
    formData.append("certid", userCertDetails.certid);
    formData.append("certified_date", userCertDetails.dateofcert);
    formData.append("expiry_date", userCertDetails.expiry);
    formData.append("visibility", userCertDetails.visibility);
    
    const url = "http://35.193.13.243:8000/certificates"; 

    axios.post(url,formData,options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.status,error.response.data);
        // Object.entries(error.response.data).forEach(([key,value]) => {
        //   setError(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value[0]}`);
        // })
      });
  }
  
  return (
    <div className="container">
      <h2>Upload Certificates</h2>
      <form onSubmit={handleSubmit}>
        <CustomSelect setCert={handleCustomSelect}/>
        <input 
          type='text' 
          name='Certification ID' 
          value={userCertDetails.certid}
          placeholder='Certification ID' 
          onChange={(e)=>setuserCertDetails({...userCertDetails,certid:e.target.value})}/>
        <input 
          type='date' 
          name='Date of Certification' 
          value={userCertDetails.dateofcert}
          placeholder='Date of Certification' 
          onChange={(e)=>setuserCertDetails({...userCertDetails,dateofcert:e.target.value})}/>
        <input 
          type='date' 
          name='Expiry Date of Certification' 
          value={userCertDetails.expiry}
          placeholder='Expiry Date of Certification' 
          onChange={(e)=>setuserCertDetails({...userCertDetails,expiry:e.target.value})}/>
        <input type="file" name="file" onChange={(e)=>{setuserCertDetails({...userCertDetails,certFile:e.target.files[0]})}}/>
        <Toggle name="Private" setVisibility={handleToggle} />
        <input type='submit' value='Upload' className='submit'/>
      </form>
      {/* {
        error ? <p style={{color:"red"}}> {error} </p> : ''
      } */}
    </div>

  );
}

export default Upload;