import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar flex justify-between p-5 bg-gray-800 ">
        <div className="nav-right">
        <img src="" alt="" />
        <h2>ADRS TECHNO</h2>
        </div>
        <div className="nav-left ">
          <ul className='flex flex-wrap  gap-4
          justify-center'>
            <li className='hover:font-bold'>   <Link to="/">Home</Link> </li>
            <li className='hover:font-bold'>   <Link to="/about">About</Link> </li>
            <li className='hover:font-bold'>   <Link to="/services">Services</Link> </li>
            <li className='hover:font-bold'>   <Link to="/our_team">Our_team</Link> </li>
            <li className='hover:font-bold'>   <Link to="/registration">Registration</Link> </li>
            <li className='hover:font-bold'>   <Link to="/gallery">Gallery</Link> </li>
            <li className='hover:font-bold'>   <Link to="/verify">Verify</Link> </li>
         
          </ul>


        </div>
      </nav>
    </>
  )
}

export default Nav
