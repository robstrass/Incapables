import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './SubNav.module.css';
import logo from '../../assets/headless-robo-tr.png'


export default function SubNav() {
    const user = useSelector(state => state.session.user)

    return (
        <div className={style.subNavContainer}>
            <div className={style.subNavLeft}>
                <NavLink
                    to='/'
                    className={style.subNavHomeHolder}
                >
                    <div className={style.logoHolder}>
                        <img
                            src={logo}
                            className={style.subNavLogo}
                        />
                    </div>
                    <div className={style.subNavTitle}>incapables</div>
                </NavLink>
                <NavLink
                    className={style.subNavProjects}
                    to='/projects'
                >
                    Projects
                </NavLink>
            </div>
            <div className={style.subNavRight}>
                <NavLink
                    className={style.subNavCreateProject}
                    to='/create'
                >
                    P U B L I S H
                </NavLink>
                <div className={style.subNavSearchDiv}>
                    <input
                        className={style.subNavSearch}
                        type='text'
                        placeholder="Let's Make..."
                    />
                    <span class="material-icons">search</span>
                </div>
            </div>
        </div>
    )
}
