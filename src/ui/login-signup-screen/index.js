import React from 'react'



import LoginSignupScreenBanner from '../../components/login-signup-screen/login-screen'
import LoginNavBar from '../../components/login-signup-screen/login-nav-bar'

function LoginComponentsScreen() {



  return (
    <div className='login_screen'>
      <LoginNavBar />
      <LoginSignupScreenBanner />
    </div>
  )
}

export default LoginComponentsScreen