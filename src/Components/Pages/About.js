import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='about-section'>
        <p>Welcome to About Page.</p>
        <nav>
          <Link to="/about">About</Link>
        </nav>
    </div>
  )
}

export default About