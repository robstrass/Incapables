import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './CreateProject.module.css';
import CreateProjectModal from './CreateProjectModal';

export default function CreateProject() {
    const dispatch = useDispatch();

    const [createProject, setCreateProject] = useState(false);

    return (
        <>
            {createProject && (
                <CreateProjectModal
                    setCreateProject={setCreateProject}
                />
            )}
            <div className={style.createProjectContainer}>
                <div className={style.createProjectHolder}>
                    <h1 className={style.createProjectTitle}>
                        SHARE WHAT YOU MAKE WITH INCAPABLES
                    </h1>
                    <div className={style.createProjectSubheading}>
                        <p className={style.createProjectDescription}>
                            Incapables is a platform for you to share how NOT to complete projects
                            through words and photos.
                        </p>
                        <p className={style.createProjectDescription}>
                            From short, brief instructions to in-depth
                            breakdowns, we want to hear from you.
                        </p>
                        <p className={style.createProjectDescription}>
                            Share your knowledge with the community.
                        </p>
                    </div>
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
