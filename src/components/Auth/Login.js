import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Assuming the backend returns a token upon successful login
      const { token } = response.data;
      // Store the token in local storage or state for future use
      localStorage.setItem('token', token);
      // Redirect user to another page upon successful login
      history.push('/dashboard');
    } catch (error) {
      setError('Login successful!.');
    }
  }

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
