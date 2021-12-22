import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import style from './CreateProject.module.css';

export default function CreateProjectModal({ setCreateProject }) {
    const dispatch = useDispatch();

    return (
        <>
            <div
                className={style.createProjectModalBackground}
                onClick={() => setCreateProject(false)}
            ></div>
            <div className={style.createProjectModalContainer}>penis</div>
        </>
    )
}
