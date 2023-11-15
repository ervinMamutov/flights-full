import { useState } from 'react';
import './Register.css';
import validateEmail from '../utils/validateEmail';
import validatePassword from '../utils/validatePassword';
import matchPasswords from '../utils/matchPasswords';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');

  const handlerSubmit = (e) => {
    e.preventDefault();
    // debugger;

    const isValidEmail = validateEmail(email);
    const isValidPassword = validatePassword(password);
    const isMatchPasswords = matchPasswords(password, rePassword);

    if (isValidEmail && isValidPassword && isMatchPasswords) {
      const data = {
        email: email,
        password: password,
        rePassword: rePassword
      };
      const registerUser = async () => {
        try {
          const res = await axios.post('http://localhost:3002/register', data, {
            withCredentials: true
          });
        } catch (err) {
          setError(err.message);
        }
      };
      registerUser();
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
  const handlerRePassword = (e) => {
    const value = e.target.value;
    setRePassword(value);
  };

  return (
    <div className="register-box">
      <p>{error}</p>
      <form className="form-register" onSubmit={(e) => handlerSubmit(e)}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => handlerEmail(e)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => handlerPassword(e)}
        />

        <label htmlFor="rePassword">Conform Password</label>
        <input
          type="password"
          name="rePassword"
          id="rePassword"
          value={rePassword}
          onChange={(e) => handlerRePassword(e)}
        />

        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};

export default Register;
