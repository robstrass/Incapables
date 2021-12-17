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
          className={style.homeButton}
          to='/'
        >
          <span class="material-icons-outlined">home</span>
        </NavLink>
      </div>
      <div className={style.rightside}>
        {sessionUser ?
          <div className={style.profileDiv}>
            <div className={style.username}>username</div>
            <div className={style.profileIcon}>
              <span class="material-icons">person</span>
            </div>
          </div>
        : null}
        <LogoutButton />
      </div>
    </nav>
  )
  // return (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink to='/' exact={true} activeClassName='active'>
  //           Home
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/login' exact={true} activeClassName='active'>
  //           Login
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/sign-up' exact={true} activeClassName='active'>
  //           Sign Up
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink to='/users' exact={true} activeClassName='active'>
  //           Users
  //         </NavLink>
  //       </li>
  //       <li>
  //         <LogoutButton />
  //       </li>
  //     </ul>
  //   </nav>
  // );
}

export default NavBar;
