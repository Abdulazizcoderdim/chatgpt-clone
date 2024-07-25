import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import './siginPage.css'

const SiginPage = () => {
  return (
    <div className="sigInPage">
      <SignIn path="/sign-in" />
    </div>
  )
}

export default SiginPage
