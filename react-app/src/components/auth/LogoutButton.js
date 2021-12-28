import React from 'react';
import { useDispatch } from 'react-redux';

import style from './Auth.module.css';
import { logout } from '../../store/session';

const LogoutButton = ({ setProfileModal }) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    setProfileModal(false);
  };

  return <button
    onClick={onLogout}
    className={style.logoutButton}
  >
    Logout
  </button>;
};

export default LogoutButton;
