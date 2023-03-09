import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/Firebase';
import LoginNavBar from '../login-nav-bar';

// CSS import
import './stylesheet/style.css';

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    // User Register function
    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(`register ${authUser}`)
            if (authUser) {
                alert("Signup Completed, Login to your account");
                navigate('/login')
            }
        }).catch((error) => {
            alert(error.message);
        }).then(() => {
            emailRef.current.value = "";
            passwordRef.current.value = "";
        });
    }

    const help = () => {

    }

    return (
        <>
            <LoginNavBar />
            <div className='signup_container'>

                <div className='signup_screen'>
                    <form>
                        <h1 className='signin_text_head'>Sign Up</h1>
                        <input ref={emailRef} className='signin_email_input' type="email" placeholder='Email' />
                        <input ref={passwordRef} className='signin_password_input' type="Password" placeholder='Password' />
                        <button
                            onClick={register}
                            className='signin_submit_button'
                            type='submit'>Sign Up</button>
                    </form>

                    <div className="extra_details">

                        <div className="remember_and_help">
                            <div className="remember_text">
                                <input type="checkbox" id='remember_me' name='remember_me' value="remember_me" />
                                <label htmlFor="remember_me">Remember me</label>
                            </div>
                            <div className="need_help">
                                <a href='https://www.google.com' onClick={help}>Need help?</a>
                            </div>
                        </div>

                        <div className="signup">
                            Already a user?<span
                                onClick={() => navigate('/login')}
                            >Sign In now</span>.
                        </div>

                        <div className="information">
                            <p>This page is protected by Google reCAPTCHA
                                to ensure you're not a bot. <a href="https://www.google.com" target="_blank" rel='noreferrer' onClick={help}>Learn more.</a></p>
                        </div>

                    </div>

                </div>

                <div className="signup_screen_gradient"></div>
            </div>
        </>
    )
}


export default SignupScreen