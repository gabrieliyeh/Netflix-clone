import "./login.css"
import React, {useState, useRef} from 'react'
import { Link } from "react-router-dom"

const Login = () => {
 
  return (
    <div className="login">
      <div className="container">
        <div className="top">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" />
            <button className="login-btn">
                Sign In
            </button>
        </div>
      <main className="login-main">
        <form>
          <h1 role='header'>Sign In</h1>
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button type="button" className="login-button">Sign In</button>
          <span>
            New to Netflix?
            <b>
             <Link to='/register'>
             Sign up now.
            </Link> 
            </b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </main>
        </div>
    </div>
  )
}

export default Login