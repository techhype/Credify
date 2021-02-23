import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../index.css'
import '../css/Button.css'


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
  const handleSubmit = (e) =>{
    
    e.preventDefault();
    // const usercred = {name, email, password};
    console.log('upload Button clicked',userCertDetails);
    
    var config = {
      method: 'post',
      url: 'http://35.223.107.206:8000/certificates',
      headers: { 
        'Content-Type': 'multipart/form-data',
        'Authorization': 'TOKEN 1b6627914bf72f6f8c3fde1659668fcca2aae3fa32fb3e389d89b6aaec93a26b'
      }
    };
    var formData = new FormData();
    formData.append("pdf", userCertDetails.certFile);
    formData.append("csp", userCertDetails.csp);
    formData.append("level", userCertDetails.certlevel);
    formData.append("certname", userCertDetails.certname);
    formData.append("certid", userCertDetails.certid);
    formData.append("certified_date", userCertDetails.dateofcert);
    formData.append("expiry_date", userCertDetails.expiry);
    formData.append("visibility", userCertDetails.visibility);
    axios(config,formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.status,error.response.data.email);
        // Object.entries(error.response.data).forEach(([key,value]) => {
        //   setError(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value[0]}`);
        // })
      });
  }
  
  return (
    <div className="container">
      <h2>Upload Certificates</h2>
      <form onSubmit={handleSubmit}>
        <select
          onChange={e => setuserCertDetails({...userCertDetails,csp:e.target.value})} >
          {
            csproviders.map((provider, key) => <option key={key} value={provider}>{provider}</option>)
          }
        </select>
        <input 
          type='text' 
          name='Certification Level' 
          value={userCertDetails.certlevel}
          placeholder='Certification Level'  
          onChange={(e)=>setuserCertDetails({...userCertDetails,certlevel:e.target.value})}/>
        <input 
          type='text' 
          name='Certification Name' 
          value={userCertDetails.certname}
          placeholder='Certification Name' 
          onChange={(e)=>setuserCertDetails({...userCertDetails,certname:e.target.value})}/>
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
        <input type='submit' value='Upload' className='submit'/>
      </form>
      {/* {
        error ? <p style={{color:"red"}}> {error} </p> : ''
      } */}
    </div>

  );
}

export default Upload;