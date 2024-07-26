import React from 'react'
import { Link } from 'react-router-dom'
import './chatList.css'

const ChahtList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore Nora AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
        <Link to={'/'}>My chat title</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Nora AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  )
}

export default ChahtList
