import React, { useState } from 'react';
import './example10.css';

function Example10() {
  const [formdata, setFormdata] = useState({
    username: '',
    phone: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, phone, email, password, confirmpassword } = formdata;

    if (!username || !phone || !email || !password || !confirmpassword) {
      alert("Please fill all the fields");
    } else if (password !== confirmpassword) {
      alert("Passwords don't match");
    } else {
      console.log("Username:", username);
      console.log("Phone:", phone);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmpassword);
      alert("Form submitted");
    }
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h2>Welcome to employee registration form</h2>
      <div className='form-control'>
        <form onSubmit={handleSubmit}>
          <div>
            <label>UserName</label><br />
            <input
              type='text'
              className='input'
              value={formdata.username}
              onChange={handlechange}
              name='username'
            />
          </div>
          <div>
            <label>Phone</label><br />
            <input
              type='number'
              className='input'
              value={formdata.phone}
              onChange={handlechange}
              name='phone'
            />
          </div>
          <div>
            <label>Email</label><br />
            <input
              type='email'
              className='input'
              value={formdata.email}
              onChange={handlechange}
              name='email'
            />
          </div>
          <div>
            <label>Password</label><br />
            <input
              type='password'
              className='input'
              value={formdata.password}
              onChange={handlechange}
              name='password'
            />
          </div>
          <div>
            <label>Confirm Password</label><br />
            <input
              type='password'
              className='input'
              value={formdata.confirmpassword}
              onChange={handlechange}
              name='confirmpassword'
            />
          </div>
          <br /><br />
          <input type='submit' />
        </form>
      </div>
    </div>
  );
}

export default Example10;