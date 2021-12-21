import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './Projects.module.css';
import * as projectsActions from '../../store/projects';

export default function Projects() {
    const dispatch = useDispatch();
    const allProjects = useSelector(state => Object.values(state.projects));
    console.log('projects', allProjects);

    useEffect(() => {
        dispatch(projectsActions.allProjectsThunk())
    }, [dispatch])

    return (
        <div className={style.projectsContainer}>
            { allProjects ? (allProjects?.map(project => (
                <NavLink
                    key={project.id}
                    className={style.projectsNavLink}
                    to={`/projects/${project.id}`}
                >
                    <img
                        className={style.projectsImg}
                        src={project.images[0].image}
                    />
                    <div className={style.projectsContentDiv}>
                        <p
                            className={style.projectsTitle}
                        >
                            {project.title} <span className={style.projectsAuthor}>
                                by {project.author.username}
                            </span>
                        </p>
                    </div>
                </NavLink>
            ))) : null }
        </div>
    )
}
