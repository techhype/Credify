import React,{ useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import '../../css/Button.css'
import '../Login/login.css'

const Register = () => {
  const [empid,setEmpid] = useState(0)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const history = useHistory()

  const handleSubmit = (e) => {

    e.preventDefault()
    const usercred = { empid, name, email, password }
    console.log('Register Button clicked')

    const url= 'http://34.82.144.123/register'
    axios.post(url,usercred)
      .then(function (response) {
        console.log(JSON.stringify(response.data))
        history.push('/login')
      })
      .catch(function (err) {
        console.log(err.response.status,err.response.data.email)
        Object.entries(err.response.data).forEach(([key,value]) => {
          setError(`${key.charAt(0).toUpperCase() + key.slice(1)} : ${value[0]}`)
        })
      })
  }

  return (
    <div className="auth-container">
      <h1 style={{ marginBottom:'60px',fontSize:'35px' }}>credify</h1>
      <div className="card card-3">
        <h2 style={{ marginBottom:'30px' }}>Create your credify account</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Employee ID">Employee ID</label>
          <input
            required
            className='tinput'
            type='number'
            step='0.01'
            name='Employee ID'
            onChange={(e) => setEmpid(e.target.value)}/>
          <label htmlFor="Name">Name</label>
          <input
            required
            className='tinput regName'
            type='text'
            name='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="Email">Email</label>
          <input
            required
            className='tinput regEmail'
            type='email'
            name='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="Password">Password</label>
          <input
            required
            className='tinput regPassword'
            type='password'
            name='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
          <input type='submit' value='Register' className='submit' style={{ fontSize:'18px' }}/>
        </form>
        {
          error ? <p style={{ color:'red',fontSize:'18px' }}> {error} </p> : ''
        }
      </div>
    </div>
  )
}

export default Register