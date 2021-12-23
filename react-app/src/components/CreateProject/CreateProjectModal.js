import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import style from './CreateProject.module.css';
import header from '../../assets/Instructables-Create-Header.png'
import { allCategoriesThunk } from '../../store/categories';
import { postProjectThunk } from '../../store/projects';

export default function CreateProjectModal({ setCreateProject }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const allCategories = useSelector(state => Object.values(state.categories.all));
    // console.log('create proj categories', allCategories);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [categoryId, setCategoryId] = useState(1);
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const validation = [];
        if (!title) validation.push('Please name your project.');
        if (!content) validation.push('Please provide a description.');
        if (!categoryId) validation.push('Please choose a category.');

        return validation;
    }

    useEffect(() => {
        dispatch(allCategoriesThunk());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors && errors.length > 0) {
            console.log('penis')
            return setErrors(errors);
        }

        const newProject = {
            title,
            content,
            categoryId
        }

        const createdProject = await dispatch(postProjectThunk(newProject));
        history.push(`/projects/${createdProject.id}`)
    }

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
                    onSubmit={handleSubmit}
                >
                    <div className={style.createProjectModalDiv}>
                        <label
                            className={style.createProjectModalLabel}
                            htmlFor='projectTitle'
                        >
                            I made a project called: 
                            <span className={style.createProjectModalErrors}>
                                {errors.length > 0 && errors.map(error => (
                                    error.includes('project')
                                )) ? errors.map(error => error.includes('project') ?
                                `${error}` : null) : null}
                            </span>
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
                            <span className={style.createProjectModalErrors}>
                                {errors.length > 0 && errors.map(error => (
                                    error.includes('description')
                                )) ? errors.map(error => error.includes('description') ?
                                `${error}` : null) : null}
                            </span>
                        </label>
                        <textarea
                            className={style.createProjectModalTextArea}
                            id='projectContent'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className={style.createProjectModalDiv}>
                        <label
                            className={style.createProjectModalLabel}
                            htmlFor='projectSelect'
                        >
                            Select a category for your project:
                            <span className={style.createProjectModalErrors}>
                                {errors.length > 0 && errors.map(error => (
                                    error.includes('category')
                                )) ? errors.map(error => error.includes('category') ?
                                `${error}` : null) : null}
                            </span>
                        </label>
                        <select
                            id='projectSelect'
                            className={style.createProjectModalSelect}
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {allCategories?.map(category => (
                                <option
                                    value={category.id}
                                    key={category.id}
                                >
                                    {category.category}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        className={style.createProjectSubmit}
                        type='submit'
                    >
                        Start Incapable
                    </button>
                </form>
            </div>
        </>
    )
}
