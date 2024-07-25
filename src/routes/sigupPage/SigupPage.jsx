import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import './sigupPage.css'

const SigupPage = () => {
  return (
    <div className="sigupPage">
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SigupPage
