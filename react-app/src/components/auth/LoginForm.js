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
        <div className={style.loginInputDiv}>
          <label
            htmlFor='loginEmail'
            className={style.loginErrors}
          >
            {errors.length > 0 && errors.map(error => (
              error.includes('email')
            )) ? errors.map(error => error.includes('email') ?
              `${error.split(':')[1]}` : null) : null}
          </label>
          <input
            className={style.loginInput}
            id='loginEmail'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className={style.loginInputDiv}>
          <label
            htmlFor='loginPassword'
            className={style.loginErrors}
          >
            {errors.length > 0 && errors.map(error => (
              error.includes('password')
            )) ? errors.map(error => error.includes('password') ?
              `${error.split(':')[1]}` : null) : null}
          </label>
          <input
            className={style.loginInput}
            id='loginPassword'
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
          <button
            className={style.loginDemo}
            onClick={(e) => {
              setEmail('demo@aa.io')
              setPassword('password')
            }}
          >Wanna Demo Our Site?</button>
          <NavLink
            className={style.loginNavLink}
            to='/sign-up'
          >
            New to Incapables? Sign Up
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
