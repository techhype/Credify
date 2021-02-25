import React,{useEffect, useState} from "react";
import axios from "axios";

import '../css/profile.css'

const Profile = () => {
  const [certs,setCerts] = useState([]);
  const [user,setUser] = useState(null);

  useEffect(()=>{
    
    getUser();
    const url = 'https://credifybe.tk/certificates';
    const options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.get(url,options)
      .then(function (response) {
        console.log(response.data);
        setCerts(response.data);

      })
      .catch(function (error) {
        console.log(error.response.status,error.response.data);
        // Object.entries(error.response.data).forEach(([key,value]) => {
        //   setError(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value[0]}`);
        // })
      });
  },[])


  const getUser = () => {
    const url = 'https://credifybe.tk/user';
    const options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.get(url,options)
      .then(function (response) {
        console.log(response.data);
        setUser(response.data.user);
        console.log(response.data.user);

      })
      .catch(function (error) {
        console.log(error.response.status,error.response.data);
      });

  }

  const difDate = (d1,d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    console.log(date1,date2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
  }

  return (
    <div className="container page">
    <header className="title">
            Profile
    </header>
    <nav>
            <div className="contentTab">
                <div className="image">
                <img src="gcp.png" alt="" className="icon_img" />
                </div>
                <div className="contents">
                    <p className="heading"></p>
                    <p className="location">chennai</p>
                    <p className="designation">Associate engineer-technology</p>
                </div>   
            </div>
        </nav>
      {/* <h1>My Certificates</h1>
      <ul>
      {
        certs &&
        certs.map((cert,i) => <div key={i}>Certificate Name:{cert.certname}<br/>
                                           Cloud Service Provider: {cert.csp}<br/> 
                                           Expiry:{difDate(cert.certified_date,cert.expiry_date)} days<br/> 
                                           Certificate Name:{cert.certname}<br/> 
                                           Certificate Name:{cert.certname}<br/> 
                                           Certificate Name:{cert.certname}<br/> 
                              <a href={cert.pdf_url} download>Download</a>
                              <a href={createViewUrl}>View</a>
                              </div>          )

      }
      </ul> */}
      
    </div>
  );
}

export default Profile;