import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './Projects.module.css';
import * as projectsActions from '../../store/projects';

export default function Projects() {
    const dispatch = useDispatch();
    const allProjects = useSelector(state => state.projects)
    console.log('projects', allProjects);

    useEffect(() => {
        dispatch(projectsActions.allProjectsThunk())
    }, [dispatch])

    return (
        <div>fuck u bitch</div>
    )
}
