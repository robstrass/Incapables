import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './HomePage.module.css';
import * as categoriesActions from '../../store/categories';

export default function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const allCategories = useSelector(state => state.categories)
    console.log('categories', allCategories)

    useEffect(() => {
        dispatch(categoriesActions.allCategoriesThunk())
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            <div className={style.homeFeatured}>
                Featured Projects
            </div>
            <div className={style.homeInfoContainer}>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        STEP-BY-STEP
                    </h2>
                    <p className={style.homeInfoContent}>
                        Content
                    </p>
                </div>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        CURATED BY YOUR PEERS
                    </h2>
                    <p className={style.homeInfoContent}>
                        Content
                    </p>
                </div>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        FAMILY FRIENDLY
                    </h2>
                    <p className={style.homeInfoContent}>
                        Content
                    </p>
                </div>
            </div>
            <div className={style.homeCategoriesContainer}>
                <h2 className={style.homeCategoriesTitle}>
                    EXPLORE PROJECTS
                </h2>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/workshop'}
                    >
                        Workshop<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[1]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[1]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[1]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/gardening'}
                    >
                        Gardening<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[2]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[2]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[2]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/living'}
                    >
                        Living<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[3]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[3]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[3]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/outside'}
                    >
                        Outside<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[4]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[4]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[4]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/craft'}
                    >
                        Craft<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[5]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[5]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[5]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/cooking'}
                    >
                        Cooking<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[6]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[6]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[6]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/miscellaneous'}
                    >
                        Miscellaneous<span className="material-icons">chevron_right</span>
                    </NavLink>
                    <div className={style.homeCategoryProjectsHolder}>
                        { allCategories ? (allCategories[7]?.projects.slice(0, 3).map(project => (
                            <NavLink
                                key={project.id}
                                className={style.homeCategorySingleCategoryHolder}
                                to={`/projects/${project.id}`}
                            >
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={allCategories[7]?.projects[0].images[0].image}
                                />
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {allCategories[7]?.projects[0].title}
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
            </div>
        </div>
    )
}
