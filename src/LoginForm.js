import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './LoginFormLight.css';
import './LoginFormDark.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { theme } = useContext(ThemeContext);
  const cssFile = theme === 'light' ? 'LoginFormLight.css' : 'LoginFormDark.css';

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (email === 'calebngethe230@gmail.com' && password === '12345') {
      // Perform login logic
      alert('Login successful');
      setError('');
      setEmail('');
      setPassword('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form className={`form-container ${theme}`} onSubmit={handleFormSubmit}>
      <div>
        {console.log(theme)}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value) 
            }required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <button type="submit">Submit</button>
      <link rel="stylesheet" type="text/css" href={cssFile} />
    </form>
  );
};

export default LoginForm;
