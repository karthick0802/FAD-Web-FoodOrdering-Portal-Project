import React, { useState } from 'react'
import './style.css';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate} from 'react-router-dom' 
import TextField from '@mui/material/TextField'; 
const Sign =()=> {
  const nav=useNavigate()
  const [email,setemail]=useState('')
  const [pass,setpass]=useState('')
  const handle=(e)=>{
    e.preventDefault()
    console.log(email,pass)
    axios.post(`http://localhost:3001/users`,{email,pass})

    .then(res=>{
      alert('signed in sucessfully')
      nav('/Form')
    })

    .catch(err=>{
      console.log(err)
    })


  }
  return (
    <div className='bod'>
         
         <div className='t'>
            <span1>FAD</span1><br/><span2>Taste With Pleasure... <RestaurantSharpIcon fontSize='larger'/></span2>
          </div>

        <form onSubmit={handle}>
        <div className='t1'>
       <h2>Sign Up</h2><br/>
            <TextField className='t3' label="UserName" variant="filled" color='secondary' required /><br/>
            <TextField className='t3' label="Mobile Number" variant="filled" type='text' color='secondary' required/><br/>
            <TextField className='t3' label="E-mail" variant="filled" type='Email' color='secondary' value={email} onChange={(event)=>{setemail(event.target.value)}} required/><br/>
            <TextField className='t3' label="Password" variant="filled" type='password' color='secondary' value={pass} onChange={(event)=>{setpass(event.target.value)}} required/><br/>
            <Button variant="contained" color='info' type='submit'>Get In</Button>
            </div>
            </form>
    </div>
  )
}
export default Sign;
