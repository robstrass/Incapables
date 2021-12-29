import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './Profile.module.css';

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    console.log('user', user)

    return (
        <div className={style.profileContainer}>
            <div className={style.profileHeaderDiv}>
                <p className={style.profileUsername}>
                    Hi, {user?.username}
                </p>
                <p className={style.profileEmail}>
                    Email: {user?.email}
                </p>
            </div>
            <div className={style.profileProjects}>
                projects
            </div>
        </div>
    )
}
