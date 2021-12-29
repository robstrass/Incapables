import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';

import style from './Auth.module.css';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (username.length < 4) setErrors(['username : Username must be at least 4 characters.'])
    if (password.length < 8) setErrors(['password : Password must be at least 8 characters.'])
    if (errors.length > 0) return errors
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['password : Passwords do not match'])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className={style.signupContainer}>
      <form
        className={style.signupForm}
        onSubmit={onSignUp}
      >
        <div className={style.signupInputDiv}>
          <label
            htmlFor='signupUsername'
            className={style.signupErrors}
          >
            {errors.length > 0 && errors.map(error => (
              error.includes('username')
            )) ? errors.map(error => error.includes('username') ?
              `${error.split(':')[1]}` : null) : null}
          </label>
          <input
            type='text'
            name='username'
            id='signupUsername'
            onChange={updateUsername}
            value={username}
            placeholder='Username'
            className={style.signupInput}
          ></input>
        </div>
        <div className={style.signupInputDiv}>
          <label
            htmlFor='signupEmail'
            className={style.signupErrors}
          >
            {errors.length > 0 && errors.map(error => (
              error.includes('email')
            )) ? errors.map(error => error.includes('email') ?
              `${error.split(':')[1]}` : null) : null}
          </label>
          <input
            type='text'
            name='email'
            id='signupEmail'
            onChange={updateEmail}
            value={email}
            className={style.signupInput}
            placeholder='Email'
          ></input>
        </div>
        <div className={style.signupInputDiv}>
          <label
            htmlFor='signupPassword'
            className={style.signupErrors}
          >
            {errors.length > 0 && errors.map(error => (
              error.includes('password')
            )) ? errors.map(error => error.includes('password') ?
              `${error.split(':')[1]}` : null) : null}
          </label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            className={style.signupInput}
            placeholder='Password'
          ></input>
        </div>
        <div className={style.signupInputDiv}>
          <label
            htmlFor='signupRepeat'
            className={style.signupErrors}
          >
            {errors.length > 0 && errors.map(error => (
              error.includes('password')
            )) ? errors.map(error => error.includes('password') ?
              `${error.split(':')[1]}` : null) : null}
          </label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            className={style.signupInput}
            placeholder='Repeat Password'
          ></input>
        </div>
        <button
          type='submit'
          className={style.signupSubmit}
        >
          Sign Up
        </button>
        <div className={style.signupInputDiv}>
          <NavLink
            className={style.signupNavLink}
            to='/login'
          >
            Already have an account? Login
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
