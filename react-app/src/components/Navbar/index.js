import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import style from './Navbar.module.css';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <nav className={style.navbar}>
      <div className={style.leftside}>
        <NavLink
          className={style.navHomeButton}
          to='/'
        >
          <span className="material-icons">home</span>
        </NavLink>
        <div className={style.navCategory}>Workshop</div>
        <div className={style.navCategory}>Gardening</div>
        <div className={style.navCategory}>Living</div>
        <div className={style.navCategory}>Outside</div>
        <div className={style.navCategory}>Craft</div>
        <div className={style.navCategory}>Cooking</div>
        <div className={style.navCategory}>Miscellaneous</div>
      </div>
      <div className={style.rightside}>
        {sessionUser ?
          <div className={style.profileDiv}>
            <div className={style.username}>username</div>
            <div className={style.profileIcon}>
              <span class="material-icons">person</span>
            </div>
          </div>
        :
          <div className={style.profileDiv}>
            <NavLink
              className={style.navLogin}
              to='/login'
            >
              Login
            </NavLink>
            <div className={style.navRightPipe}>|</div>
            <NavLink
              className={style.navSignup}
              to='/sign-up'
            >
              Sign Up
            </NavLink>
          </div>
        }
        <LogoutButton />
      </div>
    </nav>
  )
}

export default NavBar;
