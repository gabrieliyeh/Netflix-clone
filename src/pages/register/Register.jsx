import "./register.css"
import React, {useState, useRef} from 'react'

const Register = () => {
  const [email,setEmail]= useState('')
  const [password, setPassword] = useState('')

  const emailRef = useRef()
  const passwordRef = useRef()
  const handleStart = (e)=> {
    e.preventDefault()
    setEmail(emailRef.current.value)
  }

  const handleFinish = (e)=> {
    e.preventDefault()
    setPassword(passwordRef.current.value)

    setPassword('')
    setEmail('')
    alert('Well an APi call has been made easy is it not?')
  }
  return (
    <div className="register ">
      <div className="container">
        <div className="top">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix-logo" />
            <button className="login-btn">
                Sign In
            </button>
        </div>
      <main className="register-main">
      <h1> Unlimited movies, Tv shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime</h2>
      <p>Ready to watch? Enter your email to create or restart your membership</p>
      {
        !email ? (
          <form className="form-control">
          <input type="email"  placeholder="email address" ref={emailRef} />
          <button className="register-btn" onClick={handleStart}>
            Get started 
          </button>
        </form>):(
         <form className="form-control">
         <input type="password"  placeholder="password" ref={passwordRef} />
         <button className="register-btn" onClick={handleFinish}>
           Finish 
         </button>
       </form>
        )
      }
       
      </main>
        </div>
    </div>
  )
}

export default Register