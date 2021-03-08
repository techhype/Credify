import React,{useState,useEffect} from 'react'
import Certificate from '../Certificate/Certificate'
import axios from 'axios'

const AdminExpired = () => {
  const [certs,getCerts] = useState('');
  const [isLoading,setIsLoading] = useState(true);
  const [certids,setCertids]= useState([]);
  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    getUserCerts();  
  },[]);

  const getUserCerts = () =>{
    const url = 'https://credifybe.tk/expired';
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.get(url,options)
    .then(response => {
      console.log(response.data);
      getCerts(response.data);
    })
    .catch(function (error) {
      console.log(error.response.status,error.response);
    });
  }

  const notifyAll = () => {
    const url = 'https://credifybe.tk/sendmail';
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.post(url,{certids},options)
    .then(response => {
      alert(response.data);
      setCertids([])     
    })
    .catch(function (error) {
      console.log(error.response.status,error.response);
    });
  }

  const notifySingle = (i) => {
    const id = certids[i];
    setCertids([id])
    notifyAll()
  }
  return(
    <>
      <h1 style={{fontSize:'1.8em',marginTop:'25px',marginLeft:'50px'}}>All Certificates</h1>
      { !isLoading && certs.length>0 ?
        (<div>
          <input type='submit' 
          onClick={notifyAll} 
          value='Notify All' className='submit search-btn'/>
          <div className="certcontainer">
            <Certificate certs={certs} notifySingle={notifySingle}/>
          </div>
        </div>
          ):isLoading ? <h5 style={{fontSize:'1.4em',marginTop:'25px',marginLeft:'50px'}}>Loading...Please Wait</h5>
        :<h5 style={{fontSize:'1.4em',marginTop:'25px',marginLeft:'50px'}}>No Expired Certificates yet</h5>
      } 
    </>
  );
}

export default AdminExpired;