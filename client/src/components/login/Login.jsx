import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const Login = () => {
  const [currentState,setCurrentState] = useState('SignUp')
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const {url,setToken,setCurrentUser} = useContext(StoreContext);
const navigate = useNavigate()
  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData((data)=>({...data,[name]:value}))
  }

  const login = async(e)=>{
    e.preventDefault();
    let newUrl = url;
    if(currentState === "Login"){
      newUrl = "http://localhost:4000/api/user/login"
    }else{
      newUrl = "http://localhost:4000/api/user/register"
    }
    console.log(data);
    

    const res = await axios.post(newUrl,data);
    setCurrentUser(res.data)
    console.log(res.data);
    if(res.data){
      setToken(res.data.token)
    }

    navigate('/')
  }

  


  return (
    <div className='login'>
      <div className='background'></div>
      <div className="card">
     
       <Link to='/'>
       <h2 className='logo'>Tammy <span>Food</span></h2>
       </Link>
       <h2 className='welcome'>{currentState === "Login" ? "Welcome Back":"Get Started"}</h2>
       <form onSubmit={login} className="form">
       { currentState === "Login" ? <></> :
         <input type="text" name='name' onChange={handleChange} value={data.name} placeholder='Name' />}
        <input type="email" name='email' onChange={handleChange} value={data.email} placeholder='Email' />
        <input type="password" name="password" onChange={handleChange} value={data.password} placeholder='Password' />
        <button type='submit'>{currentState === "SignUp" ? "Create account":"Login"}</button>
       </form>
        <div className='login__footer'>
          { currentState === 'Login' ? <p>Need an account? <span className='links' onClick={()=>setCurrentState('SignUp')}>Click Here</span> </p>:
          <p>Already have an account? <span className='links' onClick={()=>setCurrentState('Login')}>Login here</span></p>
           } 
        </div>
      </div>
    </div>
  )
}

export default Login
