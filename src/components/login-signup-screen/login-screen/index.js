import React, { useContext } from 'react';


// CSS import
import './stylesheet/style.css'

// Context import
import { signinButtonStateContext } from '../../../setup-app/context/login-screen/signin-button-state-context/index'
import LoginScreen from '../login-form/index';


function LoginScreenBanner() {

    const { signinState, setSigninState } = useContext(signinButtonStateContext)

    return (
        <div className='login_screen_banner'>

            <div className="login_screen_contents">

                <div className="login_screen_texts">
                    {!signinState ? (
                        <>
                            <h1 className='login_screen_main_text_head'>Unlimited movies, TV shows and more.</h1><h2 className='login_screen_second_text_head'>Watch anywhere. Cancel anytime.</h2><h3 className='login_screen_third_text_head'>Ready to watch? Enter your email to create or restart your membership.</h3><div className="login_screen_input">
                                <form onSubmit={(event) => event.preventDefault()}>
                                    <input type="email"
                                        placeholder='Email Address' />
                                    <button
                                        onClick={() => setSigninState(true)}
                                        className='login_screen_getstarted_btn'
                                    >
                                        Get Started
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <LoginScreen />
                    )

                    }

                </div>

                <div className="login_screen_gradient"></div>

            </div>
        </div>
    )
}

export default LoginScreenBanner