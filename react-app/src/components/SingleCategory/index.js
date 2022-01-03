import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

import style from './SingleCategory.module.css';
import * as categoryActions from '../../store/categories';

export default function SingleCategory() {
    const dispatch = useDispatch();
    const { categoryId } = useParams();
    const category = useSelector(state => state.categories.current);

    useEffect(() => {
        dispatch(categoryActions.oneCategoryThunk(categoryId));
    }, [dispatch, categoryId]);

    return (
        <div className={style.singleCategoryContainer}>
            { category ? category.projects?.map(project => (
                <NavLink
                    key={project.id}
                    className={style.singleCategoryNavLinks}
                    to={`/projects/${project.id}`}
                >
                    { project.images[0]?.image ?
                        <img
                            className={style.singleCategoryImage}
                            src={project.images[0]?.image}
                        />
                        :
                        <img
                            className={style.singleCategoryImage}
                            src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                        />
                    }
                    <div className={style.singleCategoryContentDiv}>
                        <p className={style.singleCategoryTitle}>
                            {project.title} <span className={style.singleCategoryAuthor}>
                                by {project.author?.username}
                            </span>
                        </p>
                    </div>
                </NavLink>
            )) : null}
        </div>
    )
}
