import React from 'react'
import SendMail from './SendMail'
import '../css/Popup.css'

const Popup = (props) => {
  console.log(props.empid);
  const handleClick = () => {
    props.setTrigger(false);
    props.setEmpid('');
  }
  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn submit" onClick={handleClick}>x</button>
        <h1>Message popup</h1>
        <SendMail empid={props.empid}/>
      </div>
    </div>
  ) : "";
}

export default Popup;