import React,{useState,useEffect} from 'react'
import Certificate from '../Certificate/Certificate'
import axios from 'axios'



const AdminExpiring = () => {
  const [certs,getCerts] = useState('');
  const [expiryThreshold,setExpiryThreshold] = useState(0);
  const [isClicked,setIsClicked] = useState(false);

  useEffect(()=>{
    setIsClicked(false);
  },[])

  const getUserCerts = () =>{
    const url = 'https://credifybe.tk/expiring';
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.post(url,{"days":Number(expiryThreshold)},options)
    .then(response => {
      console.log(response.data);
      getCerts(response.data);
    })
    .catch(function (error) {
      console.log(error.response.status,error.response);
    });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    getUserCerts();
    setIsClicked(true);
  }
  return (
    <div className='admin-container'>
      <h1 style={{marginTop:'70px'}}>Admin Dashboard</h1>
      <form id='searchForm' onSubmit={handleSubmit}>
        <input
            required
            className='tinput search-input' 
            type='number' 
            name='expiry days' 
            placeholder='Expiry days' 
            onChange={(e)=>setExpiryThreshold(e.target.value)}/>
        <input type='submit' value='Search' className='submit search-btn'/>
      </form>
      {
        isClicked && (
          <div className="certcontainer">
            <Certificate certs={certs}/>
          </div>
        )  
      }
      
    </div>
  );
}

export default AdminExpiring;