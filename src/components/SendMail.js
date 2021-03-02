import axios from 'axios';
import React,{useState} from 'react'
import '../css/SendMail.css'

const SendMail = (props) => {
  const empid=props.empid;
  const [message,setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = 'https://credifybe.tk/sendmail'
    var options = {
      headers: { 
        'Authorization': `TOKEN ${localStorage.getItem('token')}` 
      }
    };
    axios.post(url,{empid,msg:message},options)
      .then(response=>{
        alert(response.data);
        document.getElementById('sendForm').reset();
      })
      .catch(error=>{
        console.log(error.response);
      })
  }

  return(
    <>
    <h1 style={{marginBottom:'30px'}}>Send Mail</h1>
    <form id='sendMailForm' onSubmit={handleSubmit}>
      <label htmlFor='Message'>Message</label>
      ​<textarea id="txtArea" name='Message'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        rows="18" cols="65"></textarea>
        {/* <input
          className='tinput mail-input' 
          type='textarea' 
          name='Message' 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}/> */}
      <input type='submit' value='Send' className='submit send-btn'/>
    </form>
    </>
  );
}

export default SendMail;