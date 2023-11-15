import { useState } from 'react';
import './Login.css';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);

    if (isValidEmail && isValidPassword) {
      const data = {
        email: email,
        password: password
      };
      const postLogin = async () => {
        try {
          const res = await axios.post('http://localhost:3002/login', data, {
            withCredentials: true
          });
        } catch (err) {
          setError('Invalid email or password');
        }
      };
      console.log(data);
      postLogin();
    }
  };

  const handlerEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlerPassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
    <div className="login-box">
      <p>{error}</p>
      <form onSubmit={(e) => handlerSubmit(e)} className="login-form">
        <label htmlFor="email-login">Email:</label>

        <input
          type="email-login"
          name="email-login"
          id="email-login"
          value={email}
          onChange={(e) => handlerEmail(e)}
        />

        <label htmlFor="password-login">Password:</label>
        <input
          type="password"
          name="password-login"
          id="password-login"
          value={password}
          onChange={(e) => handlerPassword(e)}
        />

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Login;
