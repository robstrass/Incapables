import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import style from './Auth.module.css';

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
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
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
        onSubmit={onSignUp}>
        <div className={style.signupErrors}>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className={style.signupInputDiv}>
          <input
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
            placeholder='Username'
            className={style.signupInput}
          ></input>
        </div>
        <div className={style.signupInputDiv}>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            className={style.signupInput}
            placeholder='Email'
          ></input>
        </div>
        <div className={style.signupInputDiv}>
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
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            className={style.signupInput}
            placeholder='Repeat Password'
          ></input>
        </div>
        <button type='submit'>Sign Up</button>
        <div className={style.signupInputDiv}>
          <NavLink
            className={style.signupNavLink}
            to='/login'
          >
            Already have an account? Login here.
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
