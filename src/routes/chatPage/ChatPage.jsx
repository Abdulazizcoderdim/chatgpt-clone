import React from 'react'
import NewPrompt from '../../components/newPrompt/NewPrompt'
import './chatPage.css'

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <div className="message">Test message from ai</div>
          <div className="message user">Test message from user</div>
          <NewPrompt />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
