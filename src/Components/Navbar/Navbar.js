import React from 'react'
import './Navbar.css'



function Navbar() {
  const handleCllick=()=>{
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className='Navbar'>
        
        <img  className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflixlogo" />
        <button onClick={handleCllick} className='Sign__Out'>Sign Out</button>
        <img  className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
    </div>
  )
}

export default Navbar