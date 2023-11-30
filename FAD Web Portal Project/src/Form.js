import React, { useState } from 'react';
import './style.css';
import RestaurantSharpIcon from '@mui/icons-material/RestaurantSharp';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import VpnKeySharpIcon from '@mui/icons-material/VpnKeySharp';
import { Link,useNavigate } from 'react-router-dom';  
import axios from 'axios';
import { useEffect } from 'react';
const Form =()=> {
    const nav=useNavigate()
    const [email,setemail]=useState('')
    const [pass,setpass]=useState('')
    useEffect(() => {
        document.title = "FAD";
    }, []);
    const handle=(e)=>{
        e.preventDefault()
          axios.get(`http://localhost:3001/users?email=${email}&pass=${pass}`)
          .then(res=>{
            if(res.data.length>0){
                alert('Logged In');
                nav('/Hom')
            }
            else{
                alert('Failed')
            }
          })
          .catch(err=>{
            console.log(err)
        })
    }
    return (
        <>
        <div className='bod'>

            <div className='t'>
            <span1>FAD</span1><br/><span2>Taste With Pleasure... <RestaurantSharpIcon fontSize='larger'/></span2>
            </div>

            <form onSubmit={handle}>
        <div className="t1">
            <h2>Log In</h2>
            <PersonSharpIcon fontSize='large'/><TextField  className='t3' label="Email" type="email" variant="outlined" color='secondary'  value={email} onChange={(event)=>setemail(event.target.value)} required/><br/><br/>
            <VpnKeySharpIcon fontSize='large'/><TextField className='t3' label="Password" type="password" variant="outlined" color='secondary' value={pass} onChange={(event)=>setpass(event.target.value)} required/><br/><br/>
            <div className='t4'>
            <Button variant="contained" color='info' type='submit' >Log In</Button>
            <Link to="/Sign"><Button variant="filled" color='info' type='submit'>Sign Up</Button></Link>
            </div>
        </div>
           </form>

        </div>
        </>
    )
}
export default Form