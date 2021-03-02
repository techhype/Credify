import axios from 'axios';
import React,{useState} from 'react'

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
    <h1>Send Mail</h1>
    <form id='sendForm' onSubmit={handleSubmit}>
      <label htmlFor='Message'>Message</label>
        <input
          className='tinput' 
          type='text' 
          name='Message' 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}/>
      <input type='submit' value='Send' className='submit upload'/>
    </form>
    </>
  );
}

export default SendMail;