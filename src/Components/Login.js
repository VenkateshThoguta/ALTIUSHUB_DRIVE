import React, { useState } from 'react';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const predefinedUser = { username: 'admin', password: 'admin123' };

    if (username === predefinedUser.username && password === predefinedUser.password) {
      const expirationTime = new Date().getTime() + 60 * 60 * 1000; // 1 hour expiration
      const userSession = {
        user: predefinedUser,
        expiresAt: expirationTime
      };
      localStorage.setItem('userSession', JSON.stringify(userSession));
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
