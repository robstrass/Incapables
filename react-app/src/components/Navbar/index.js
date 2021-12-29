import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import style from './Navbar.module.css';
import LogoutButton from '../auth/LogoutButton';

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  const [profileModal, setProfileModal] = useState('');

  const profileModalFunc = () => {
    return (
      <>
        <div
          className={style.profileModalBackground}
          onClick={() => setProfileModal(false)}
        ></div>
        <div className={style.profileModalContainer}>
          <NavLink
            className={style.profileModalNavLink}
            onClick={() => setProfileModal(false)}
            to='/profile'
          >
            Profile
          </NavLink>
          <LogoutButton setProfileModal={setProfileModal}/>
        </div>
      </>
    )
  }

  return (
    <>
      {profileModal && profileModalFunc()}
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
            <div
              className={style.profileDiv}
              onClick={() => setProfileModal(true)}
            >
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
        </div>
      </nav>
    </>
  )
}

export default NavBar;
