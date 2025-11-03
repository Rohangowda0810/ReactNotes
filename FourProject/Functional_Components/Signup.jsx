import React from 'react'
import './style.css'
function Signup() {
  return (
    <div>
         <h1 className="page-title">Signup Page</h1>
      <div className="form-box">
        <h2>Sign Up</h2>
        <label htmlFor="signupUsername">Username</label>
        <input type="text" id="signupUsername" placeholder="Enter username" />

        <label htmlFor="signupPassword">Password</label>
        <input
          type="password"
          id="signupPassword"
          placeholder="Enter password"
        />

        <label htmlFor="signupConfirmPassword">Confirm Password</label>
        <input
          type="password"
          id="signupConfirmPassword"
          placeholder="Confirm password"
        />

        <button className="btn">Sign Up</button>
        <span>
          Already have an account? <a href="#">Login</a>
        </span>
      </div>

      
    </div>
  )
}

export default Signup