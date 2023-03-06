import React, { useContext } from 'react';

// CSS import
import './stylesheet/style.css';

// Assets import
import netflixLogo from '../../../assets/images/netflix-logo/netflix-logo.png';

// Context import
import { signinButtonStateContext } from '../../../setup-app/context/login-screen/signin-button-state-context/index'

function LoginNavBar() {

  const { signinState, setSigninState } = useContext(signinButtonStateContext);

  return (
    <div className='login_nav_bar'>

      <div className="login_nav_bar_background">

        <img
          className='login_screen_logo'
          src={netflixLogo} alt=""
        />

        <div className="signin_language_section">

          {!signinState ? (

            <>
              <select className='language_selection' name="language" id="language">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
              </select><button
                className='login_screen_signin_button'
                onClick={() => setSigninState(true)}
              >Sign In</button>
            </>

          ) : (
            ""
          )

          }

        </div>

      </div>

    </div>
  )
}

export default LoginNavBar