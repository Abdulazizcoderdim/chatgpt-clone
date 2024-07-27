import React, { useEffect, useRef } from 'react'
import './newPrompt.css'

const NewPrompt = () => {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  return (
    <>
      {/* add new chat */}
      <div className="endChat" ref={endRef}>TEST</div>
      <form className="newForm">
        <label htmlFor="file">
          <img src="/attachment.png" alt="" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type="text" placeholder="Ask anything..." />
        <button title="Send">
          <img src="/arrow.png" alt="" />
        </button>
      </form>
    </>
  )
}

export default NewPrompt
