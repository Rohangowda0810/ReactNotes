import React, { useState } from 'react';
import './example9.css';

function Example9() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    setSuccess(true);
  };

  return (
    <div>
      <div className='container'>
        <form className='formContainer' onSubmit={handleSubmit}>
          <label>UserName</label>
          <input
            type='text'
            name='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username'
          />
          <br /><br />
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
          />
          <br /><br />
          <button type='submit'>Login</button>
        </form>
      </div>
      {success && <h3>Form submitted successfully</h3>}
    </div>
  );
}

export default Example9;