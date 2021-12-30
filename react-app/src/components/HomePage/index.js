import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import style from './HomePage.module.css';
import * as categoriesActions from '../../store/categories';
import * as projectActions from '../../store/projects';

export default function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)
    const allCategories = useSelector(state => state.categories.all)
    const projects = useSelector(state => Object.values(state.projects.all));
    console.log('categories', allCategories)
    console.log('projects', projects)

    const randomProject = () => Math.floor(Math.random() * 4 + 1);
    const randomNum = randomProject()

    useEffect(() => {
        dispatch(categoriesActions.allCategoriesThunk());
        dispatch(projectActions.allProjectsThunk());
    }, [dispatch])

    return (
        <div className={style.homeContainer}>
            <div className={style.homeFeatured}>
                { projects ? projects[randomNum]?.images[0]?.image ?
                <div className={style.homeFeatureDiv}>
                    <img
                        className={style.homeFeatureImg}
                        src={projects[randomNum]?.images[0]?.image}
                    />
                    <NavLink
                        className={style.homeFeatureContent}
                        to={`/projects/${projects[randomNum].id}`}
                    >
                        <h1 className={style.homeFeatureTitle}>
                            {projects[randomNum]?.title}
                        </h1>
                        <h3 className={style.homeFeatureAuthor}>
                            by {projects[randomNum]?.author.username}
                        </h3>
                        <p className={style.homeFeatureContent}>
                            {projects[randomNum]?.content}
                        </p>
                    </NavLink>
                </div>
                : null
                : null }
            </div>
            <div className={style.homeInfoContainer}>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        STEP-BY-STEP
                    </h2>
                    <p className={style.homeInfoContent}>
                        We make it easy for you to follow the wrong way
                        to do simple at-home projects. Whether it be
                        changing your oil to building a gingerbread,
                        we don't have you covered.
                    </p>
                </div>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        CURATED BY YOUR PEERS
                    </h2>
                    <p className={style.homeInfoContent}>
                        Incapables are created by you, the
                        community. We all have skills and
                        knowledge, but no one wants to share
                        that. Join the community today to
                        share how NOT to complete your project.
                    </p>
                </div>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        FAMILY FRIENDLY
                    </h2>
                    <p className={style.homeInfoContent}>
                        Sarcasm is one of our core principles.
                        This community is meant to be light-hearted
                        and all in good taste. Find your happy place
                        here to fulfill all your satirical needs.
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
                        to={'/categories/1'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/2'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/3'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/4'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/5'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/6'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <NavLink
                        className={style.homeSingleCategoryTitle}
                        to={'/categories/7'}
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
                                {project.images[0]?.image ?
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={project.images[0]?.image}
                                />
                                :
                                <img
                                    className={style.homeCategorySingleCategoryImg}
                                    src={'https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png'}
                                />}
                                <div className={style.homeCategorySingleCategoryInfo}>
                                    <p className={style.homeCategoryTitleP}>
                                        {project.title} <span className={style.homeCategoryAuthor}>
                                            by {project.author?.username}
                                        </span>
                                    </p>
                                </div>
                            </NavLink>
                        ))) : null }
                    </div>
                </div>
            </div>
            <footer className={style.homeFooter}>
                <img src={'https://i.ibb.co/ZmrdqsC/linkedin.png'}/>
                <img src={'https://i.ibb.co/b2ZmRL8/github.png'}/>
            </footer>
        </div>
    )
}
