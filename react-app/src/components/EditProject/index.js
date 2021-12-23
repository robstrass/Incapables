import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from './EditProject.module.css';
import header from '../../assets/Instructables-Create-Header.png';
import { allCategoriesThunk } from '../../store/categories';

export default function EditProject({ setEditModal }) {
    const dispatch = useDispatch();
    const project = useSelector(state => state.projects.current);
    const allCategories = useSelector(state => Object.values(state.categories.all));

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

    return (
        <>
            <div
                className={style.editProjBackground}
                onClick={() => setEditModal(false)}
            ></div>
            <div className={style.editProjContainer}>
                <img
                    className={style.editProjImg}
                    src={header}
                />
                <form
                    className={style.editProjForm}
                >
                    <div className={style.editProjDiv}>
                        <label
                            className={style.editProjLabel}
                            htmlFor='editProjTitle'
                        >
                            I made a project called:
                            <span className={style.editProjErrors}>
                                {errors.length > 0 && errors.map(error => (
                                    error.includes('project')
                                )) ? errors.map(error => error.includes('project') ?
                                `${error}` : null) : null}
                            </span>
                        </label>
                        <input
                            className={style.editProjInput}
                            id='editProjTitle'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className={style.editProjDiv}>
                        <label
                            className={style.editProjLabel}
                            htmlFor='projectContent'
                        >
                            Project description:
                            <span className={style.editProjErrors}>
                                {errors.length > 0 && errors.map(error => (
                                    error.includes('description')
                                )) ? errors.map(error => error.includes('description') ?
                                `${error}` : null) : null}
                            </span>
                        </label>
                        <textarea
                            className={style.editProjTextArea}
                            id='projectContent'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                    <div className={style.editProjDiv}>
                        <label
                            className={style.editProjLabel}
                            htmlFor='projectSelect'
                        >
                            Select a category for your project:
                            <span className={style.editProjErrors}>
                                {errors.length > 0 && errors.map(error => (
                                    error.includes('category')
                                )) ? errors.map(error => error.includes('category') ?
                                `${error}` : null) : null}
                            </span>
                        </label>
                        <select
                            id='projectSelect'
                            className={style.editProjSelect}
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
                        className={style.editProjSubmit}
                        type='submit'
                    >
                        Edit Incapable
                    </button>
                </form>
            </div>
        </>
    )
}
