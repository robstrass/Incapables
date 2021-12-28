import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import style from './Navbar.module.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (
    <nav className={style.navbar}>
      <div className={style.leftside}>
        <NavLink
          className={style.navHomeButton}
          to='/'
        >
          <span className="material-icons">home</span>
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/1'
        >
          Workshop
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/2'
        >
          Gardening
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/3'
        >
          Living
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/4'
        >
          Outside
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/5'
        >
          Craft
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/6'
        >
          Cooking
        </NavLink>
        <NavLink
          className={style.navCategory}
          to='/categories/7'
        >
          Miscellaneous
        </NavLink>
      </div>
      <div className={style.rightside}>
        {user ?
          <div className={style.profileDiv}>
            <div className={style.username}>{user.username}</div>
            <div className={style.profileIcon}>
              <span className="material-icons">person</span>
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
