import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './CreateProject.module.css';

export default function CreateProject() {
    const dispatch = useDispatch();

    const [createProject, setCreateProject] = useState(false);

    const createProjectModal = () => {
        return (
            <>
                <div className={style.createProjectModalBackground}></div>
                <div className={style.createProjectModal}></div>
            </>
        )
    }

    return (
        <>
            {createProject && createProjectModal()}
            <div className={style.createProjectContainer}>
                <div className={style.createProjectHolder}>
                    <h1 className={style.createProjectTitle}>
                        SHARE WHAT YOU MAKE WITH INCAPABLES
                    </h1>
                    <h3 className={style.createProjectSubheading}>
                        Incapables is a platform for you to share how NOT to complete projects
                        through words and photos. From short, brief instructions to in-depth
                        breakdowns, we want to hear from you.
                    </h3>
                    <div
                        onClick={() => setCreateProject(true)}
                        className={style.createProjectButton}
                    >
                        New Incapable
                    </div>
                </div>
            </div>
        </>
    )
}
