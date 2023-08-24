import React from 'react'
import logo from '../assets/logo.png'

function Header() {
  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
}

  return (
   
<div>
<div className="wrapper-head">
  <nav>
    <div className='logo-head'><img src={logo} alt="logo" /></div>
    <ul>
      <li>
        <a className="nav-link" href="#about">About</a>
      </li>
      <li>
        <a className="nav-link" href="#services">Services</a>
      </li>
      <li>
        <a className="nav-link" href="#addpet">Add Pets</a>
      </li>
     
      {/* <li>
        <a className="nav-link" href="#">Contact</a>
      </li> */}
      <button onClick={logout} className="logout">LogOut</button>
    </ul>
  </nav>
</div>
</div>
  )
}

export default Header