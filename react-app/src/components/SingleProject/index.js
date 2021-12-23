import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';

import style from './SingleProject.module.css';
import * as projectsActions from '../../store/projects';

export default function SingleProject() {
    const dispatch = useDispatch();
    const { projectId } = useParams();
    const user = useSelector(state => state.session.user);
    const project = useSelector(state => state.projects.current)
    console.log('singleproject', project, user);

    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    const ownerVerify = (user, project) => {
        return user.id === project.user_id;
    }

    useEffect(() => {
        dispatch(projectsActions.oneProjectThunk(projectId))
    }, [dispatch]);

    return (
        <div className={style.singleProjContainer}>
            <div className={style.singleProjHolder}>
                <h1 className={style.singleProjTitle}>
                    {project ? project.title : null}
                </h1>
                <p className={style.singleProjAuthor}>
                    by {project ? project.author?.username : null}
                </p>
                <p className={style.singleProjContent}>
                    {project ? project.content : null}
                </p>
                { ownerVerify && (
                    <div className={style.singleProjOwnerButtons}>
                        <div
                            className={style.singleProjEdit}
                            onClick={() => setEditModal(true)}
                        >
                            Edit
                        </div>
                        <div className={style.singleProjDelete}>Delete</div>
                    </div>
                )}
            </div>
            <div className={style.singleProjSteps}>
                { project ? project.images?.map((image, index) => (
                    <div
                        key={image.id}
                        className={style.singleProjSingleStep}
                    >
                        <img
                            className={style.singleProjImage}
                            src={image.image}
                        />
                        <h2 className={style.singleProjStepCount}>
                            Step #{index + 1}
                        </h2>
                        <p className={style.singleProjStepContent}>
                            {image.content}
                        </p>
                    </div>
                )) : null}
            </div>
        </div>
    )
}
