import React from 'react'
import LoginScreenBanner from '../../components/login-screen/login-banner'
import LoginNavBar from '../../components/login-screen/login-nav-bar'

function LoginScreen() {

  

  return (
    <div className='login_screen'>
        <LoginNavBar />
        <LoginScreenBanner />
    </div>
  )
}

export default LoginScreen