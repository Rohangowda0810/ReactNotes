import React from 'react'
import './style.css'
function Login() {
  return (
    
        <div className="container">
      {/* Login Page */}
      <h1 className="page-title">Login Page</h1>
      <div className="form-box">
        <h2>Login</h2>
        <label htmlFor="loginEmail">Email</label>
        <input type="text" id="loginEmail" placeholder="Enter your email" />

        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          id="loginPassword"
          placeholder="Enter your password"
        />

        <a href="#">Forgot Password?</a>

        <button className="btn">Login</button>
        <span>
          Don’t have an account? <a href="#">Sign up</a>
        </span>
      </div>

      
    </div>
  )
}

export default Login