import React from 'react'
import { Link } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'


function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/home">Home</Link>
    </div>
  )
}

export default Navbar