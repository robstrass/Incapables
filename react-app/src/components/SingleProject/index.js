import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import style from './SingleProject.module.css';
import * as projectsActions from '../../store/projects';

export default function SingleProject() {
    const dispatch = useDispatch();
    const { projectId } = useParams();
    const project = useSelector(state => state.projects.current)
    console.log('singleproject', project);

    useEffect(() => {
        dispatch(projectsActions.oneProjectThunk(projectId))
    }, [dispatch]);

    return (
        <div className={style.singleProjContainer}>
            <div className={style.singleProjHolder}>
                <h1 className={style.singleProjTitle}>
                    {project ? project?.title : null}
                </h1>
            </div>
        </div>
    )
}
