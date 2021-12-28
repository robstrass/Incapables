import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';

import style from './Auth.module.css';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={style.loginContainer}>
      <form
        onSubmit={onLogin}
        className={style.loginForm}
      >
        <div className={style.loginErrors}>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className={style.loginInputDiv}>
          <input
            className={style.loginInput}
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className={style.loginInputDiv}>
          <input
            className={style.loginInput}
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button
          type='submit'
          className={style.loginSubmit}
        >
          Login
        </button>
        <div className={style.loginRedirects}>
          <p
            className={style.loginDemo}
            onClick={(e) => {
              setEmail('demo@aa.io')
              setPassword('password')
            }}
          >Wanna Demo Our Site?</p>
          <NavLink
            className={style.loginNavLink}
            to='/signup'
          >
            New to Incapables? Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
