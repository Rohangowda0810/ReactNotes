import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use 'react-dom/client' for React 18+

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password.trim()) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      console.log('Form submitted:', formData);
    }
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '50px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontFamily: 'Arial, sans-serif'
    },
    input: {
      width: '100%',
      padding: '8px',
      marginTop: '4px',
      marginBottom: '10px',
      boxSizing: 'border-box'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007bfc',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    },
    error: {
      color: 'red',
      fontSize: '0.9em'
    },
    success: {
      marginTop: '20px',
      color: 'green',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.container}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <div style={styles.error}>{errors.name}</div>}
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <div style={styles.error}>{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.password && <div style={styles.error}>{errors.password}</div>}
        </div>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      {submitted && <div style={styles.success}>Signup successful!</div>}
    </div>
  );
}

export default Signup;

// ✅ Mount the component using React 18+ API
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Signup />);