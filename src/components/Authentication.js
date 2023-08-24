import React, { useEffect, useRef, useState } from 'react';
import '../style.css';
import logo from '../assets/logo.png'
import Home from './Home';

function Authentication() {
  
  const name=useRef()
  const email=useRef()
  const password=useRef()
  const [showHome,setShowHome]=useState(false)
  const [show,setShow]=useState(false)
   const localSignUp=localStorage.getItem("signUp")
   const localEmail=localStorage.getItem("email")
   const localPassword=localStorage.getItem("password")
   const localName=localStorage.getItem("name")
  useEffect(()=>{
   if(localSignUp){
       setShowHome(true)
   }
   if(localEmail){
       setShow(true)
   }
  })
  const handleClick=()=>{
      if(name.current.value&&email.current.value&&password.current.value)
     {
       localStorage.setItem("name",name.current.value)
       localStorage.setItem("email",email.current.value)
       localStorage.setItem("password",password.current.value)
       localStorage.setItem("signUp",email.current.value)
       alert("Account created successfully!!")
       window.location.reload()
     }
  }

  const handleSignIn=()=>{
   if(email.current.value==localEmail&&password.current.value==localPassword){
       localStorage.setItem("signUp",email.current.value)
       window.location.reload()
   }else{
       alert("Please Enter valid Credential")
   }
  }


  return (
<div className="section">
{showHome?<Home/>:
            (show?
<div className='bg'>
<div className="wrapper">
<div className='logo'>   <img src={logo} alt="logo" /></div>
    <h2>Login</h2>
    <h4 className='mt-4'>Welcome Back! {localName} </h4>
    <form >
      
      <div className="input-box">
        <input  type="text" ref={email} placeholder="Enter your email"  />
      </div>
      <div className="input-box">
        <input  type="password" ref={password} placeholder="Enter password"  />
      </div>
     
      
      <div className="input-box button">
        <button type="Submit" onClick={handleSignIn} >Login</button>
      </div>
    
    </form>
  </div>
  </div>

  :
  <div className='bg'>
  <div className="wrapper">
<div className='logo'>   <img src={logo} alt="logo" /></div>
    <h2>Registration</h2>
    
    <form >
      <div className="input-box">
        <input  type="text" ref={name} placeholder="Enter your name"  />
      </div>
      <div className="input-box">
        <input  type="text" ref={email} placeholder="Enter your email"  />
      </div>
      <div className="input-box">
        <input  type="password" ref={password} placeholder="Create password"  />
      </div>
     
      <div className="policy">
        <input type="checkbox" />
        <h3>I accept all terms and condition</h3>
      </div>
      <div className="input-box button">
      <button type="Submit" onClick={handleClick} >Register</button>
      </div>
    
    </form>
  </div>
  </div>
  )
}
</div>
  )
}

export default Authentication