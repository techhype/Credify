import React,{ useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
// import { isAdmin } from '../../utils/index'

import './login.css'
import '../../css/Button.css'


const ForgotPW = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setCPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [error,setError] = useState('')

  let history = useHistory()
  const handleSubmit = async(e) => {
    e.preventDefault()
    if(password.localeCompare(cpassword)===0){
      const usercred ={ email,password }
      const url= 'http://34.82.144.123/changepassword'
      axios.post(url,usercred)
        .then(function (response) {
          console.log(response.status)
          alert('Password Changed')
          history.goBack()
        })
        .catch(function (err) {
          console.log(err.response)
          Object.entries(err.response.data).forEach(([key,value]) => {
            setError(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value[0]}`)
          })
        })
    }else{
      alert('Passwords Dont Match.Please Check.')
    }

  }



  return (
    <div className="auth-container">
      <div className="card card-3">
        <h2 style={{ marginBottom:'30px' }}>Forgot Password</h2>
        <form id='authform' onSubmit={handleSubmit}>
          <label htmlFor="Email">Email</label>
          <input
            className='tinput'
            type='email'
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
          <label htmlFor="Password">Password</label>
          <input
            className='tinput'
            type='password'
            name='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/>
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <input
            className='tinput'
            type='password'
            name='ConfirmPassword'
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            required/>
          <input type='submit' value='Submit' className='submit'/>
        </form>
        {
          error ? <p style={{ color:'red' }}> {error} </p> : ''
        }
      </div>
    </div>
  )
}



export default ForgotPW