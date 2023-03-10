import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/Firebase';

// CSS import
import './stylesheet/style.css'

function LoginForm() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate()

    const signup = () => {
        navigate('/signup')
    }
   
    
    const signIn = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
           if(authUser){
            alert('Login Successed')
            navigate('/profile')
           }
        })
        .catch((error) => alert(error.message))
    }


    const help = (event) => {
        event.preventDefault();
    }

  return (
    <div className='signup_screen'>

        <form>
            <h1 className='signin_text_head'>Sign In</h1>
            <input ref={emailRef} className='signin_email_input' type="email" placeholder='Email' />
            <input ref={passwordRef} className='signin_password_input' type="Password" placeholder='Password' />
            <button 
            onClick={signIn}
            className='signin_submit_button' 
            type='submit'>Sign In</button>
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
                New to Netflix?<span 
                onClick={signup}
                >Sign Up now</span>.
            </div>

            <div className="information">
                <p>This page is protected by Google reCAPTCHA 
                    to ensure you're not a bot. <a href="https://www.google.com" target="_blank" rel='noreferrer' onClick={help}>Learn more.</a></p>
            </div>

        </div>

    </div>
  )
}

export default LoginForm