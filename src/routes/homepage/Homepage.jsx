import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className='orbital' />
      <div className="left">
        <h1>NORA AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Nora AI is a cutting-edge conversational AI platform, delivering
          intelligent and human-like interactions for seamless communication.
        </h3>
        <Link to={'/dashboard'}>Get Started</Link>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Homepage
