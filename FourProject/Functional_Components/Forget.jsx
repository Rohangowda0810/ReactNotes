import React from 'react'
import './style.css'
function Forget() {
  return (
    <div>
        <h1 className="page-title">Password Page</h1>
      <div className="form-box">
        <h2>Forgot Password</h2>
        <label htmlFor="forgotName">Name</label>
        <input type="text" id="forgotName" placeholder="Enter your name" />

        <label htmlFor="forgotEmail">Email</label>
        <input type="email" id="forgotEmail" placeholder="Enter your email" />

        <label htmlFor="forgotPassword">Password</label>
        <input
          type="password"
          id="forgotPassword"
          placeholder="Enter new password"
        />

        <label htmlFor="forgotConfirmPassword">Confirm Password</label>
        <input
          type="password"
          id="forgotConfirmPassword"
          placeholder="Confirm new password"
        />

        <button className="btn">Submit</button>

      
    </div>
    </div>
  )
}

export default Forget