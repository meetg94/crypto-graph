import React from 'react'
import { Link } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import logo from '../logo.png'
import "react-awesome-button/dist/styles.css";



function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar-logoside'>
        <img className="logo-class" src={logo} />
        <Link to="/" style={{ textDecoration: 'none' }}><h3>Coin Hippo</h3></Link>
      </div>
      <div className='navbar-leftside'>
        <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link> | {" "}
        <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
      </div>    
    </div>
  )
}

export default Navbar