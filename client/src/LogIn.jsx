import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styling/Login.css';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isRegistering
      ? 'http://localhost:3000/auth/register'
      : 'http://localhost:3000/auth/login';
    try {
      const response = await axios.post(url, { username, password });
      if (!isRegistering) {
        setToken(response.data.token);
        navigate('/dogs'); // Redirect to /dogs after successful login
      } else {
        alert('Registration successful! Please log in.');
        setIsRegistering(false);
      }
    } catch (err) {
      setError(
        `${isRegistering ? 'Registration' : 'Login'} failed: ${
          err.response?.data?.message ||
          'Your username or password is wrong, try again'
        }`
      );
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Username'
          required
          className="login-input"
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
          className="login-input"
        />
        <button type='submit' className="login-button">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
        {isRegistering
          ? 'Already have an account? Login'
          : 'New user? Register'}
      </button>
    </div>
  );
};

export default Login;