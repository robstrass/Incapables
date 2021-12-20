import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './HomePage.module.css';
import * as categoriesStuff from '../../store/categories';

export default function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(categoriesStuff.oneCategoryThunk(1))
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
                    <div className={style.homeSingleCategoryTitle}>
                        Workshop
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <div className={style.homeSingleCategoryTitle}>
                        Gardening
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <div className={style.homeSingleCategoryTitle}>
                        Living
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <div className={style.homeSingleCategoryTitle}>
                        Outside
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <div className={style.homeSingleCategoryTitle}>
                        Craft
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <div className={style.homeSingleCategoryTitle}>
                        Cooking
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
                <div className={style.homeCategoriesDiv}>
                    <div className={style.homeSingleCategoryTitle}>
                        Miscellaneous
                    </div>
                    <div className={style.homeCategoryProjectsHolder}>
                        Projects Container
                    </div>
                </div>
            </div>
        </div>
    )
}
