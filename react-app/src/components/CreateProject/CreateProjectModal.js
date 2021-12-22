import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './CreateProject.module.css';
import header from '../../assets/Instructables-Create-Header.png'
import { allCategoriesThunk } from '../../store/categories';

export default function CreateProjectModal({ setCreateProject }) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState('');

    return (
        <>
            <div
                className={style.createProjectModalBackground}
                onClick={() => setCreateProject(false)}
            ></div>
            <div className={style.createProjectModalContainer}>
                <img
                    className={style.createProjectModalImg}
                    src={header}
                />
                <form
                    className={style.createProjectModalForm}
                >
                    <div className={style.createProjectModalDiv}>
                        <label
                            className={style.createProjectModalLabel}
                            htmlFor='projectTitle'
                        >
                            I made a project called:
                        </label>
                        <input
                            className={style.createProjectModalInput}
                            id='projectTitle'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={style.createProjectModalDiv}>
                        <label
                            className={style.createProjectModalLabel}
                            htmlFor='projectContent'
                        >
                            Project description:
                        </label>
                        <input
                            className={style.createProjectModalInput}
                            id='projectContent'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className={style.createProjectModalDiv}>
                        <select
                            value=
                    </div>
                </form>
            </div>
        </>
    )
}
