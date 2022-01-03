import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';

import style from './Profile.module.css';
import { userProjectThunk } from '../../store/projects';

export default function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const projects = useSelector(state => Object.values(state.projects.userProjects));

    useEffect(() => {
        dispatch(userProjectThunk(user.id))
    }, [dispatch]);

    if (!user) {
        return <Redirect to='/login' />
    }

    return (
        <div className={style.profileContainer}>
            <div className={style.profileHeaderDiv}>
                <p className={style.profileUsername}>
                    Hi, {user?.username}
                </p>
                <p className={style.profileEmail}>
                    Email: {user?.email}
                </p>
                <NavLink
                    className={style.profileCreateLink}
                    to={'/create'}
                >
                    New Incapable
                </NavLink>
            </div>
            <div className={style.profileProjects}>
                { projects ? projects?.map(project => (
                    <NavLink
                        key={project.id}
                        className={style.profileNavLink}
                        to={`/projects/${project.id}`}
                    >
                        {project.images[0]?.image ?
                        <img
                            className={style.profileImg}
                            src={project.images[0]?.image}
                        />
                        :
                        <img
                            className={style.profileImg}
                            src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                        />}
                        <div className={style.profileContentDiv}>
                            <p
                                className={style.profileTitle}
                            >
                                {project.title} <span className={style.profileAuthor}>
                                    by {project.author?.username}
                                </span>
                            </p>
                        </div>
                    </NavLink>
                )) : null }
            </div>
        </div>
    )
}
