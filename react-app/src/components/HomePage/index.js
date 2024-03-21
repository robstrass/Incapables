import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import style from "./HomePage.module.css";

import FeaturedProject from "./FeaturedProject";
import HomePageInfo from "./HomePageInfo";
import ProjectSection from "./ProjectSection";
import Footer from "../Footer";
import { COPY } from "../../shared/copyConstants";

import * as categoriesActions from "../../store/categories";
import * as projectActions from "../../store/projects";

export default function HomePage() {
  const dispatch = useDispatch();
  const allCategories = useSelector(state => state.categories.all);
  const projectsObject = useSelector(state => state.projects.all);
  const projects = Object.values(projectsObject);
  const projectKeys = Object.keys(projectsObject);

  useEffect(() => {
    dispatch(categoriesActions.allCategoriesThunk());
    dispatch(projectActions.allProjectsThunk());
  }, [dispatch]);

  console.log("allCategories: ", allCategories);

  return (
    <div className={style.homeContainer}>
      <div className={style.homeFeatured}>
        <div className={style.homePageFeatureBlur}></div>
        <FeaturedProject projects={projects} projectKeys={projectKeys} />
      </div>
      <div className={style.homeInfoContainer}>
        <HomePageInfo />
      </div>
      <div className={style.homeCategoriesContainer}>
        <h2 className={style.homeCategoriesTitle}>{COPY.EXPLORE_PROJECTS}</h2>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/1"}
          >
            Workshop<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories ? (
              <ProjectSection projects={allCategories[1]?.projects} />
            ) : null}
          </div>
        </div>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/2"}
          >
            Gardening<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories ? (
              <ProjectSection projects={allCategories[2]?.projects} />
            ) : null}
          </div>
        </div>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/3"}
          >
            Living<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories
              ? <ProjectSection projects={allCategories[3]?.projects} />
              : null}
          </div>
        </div>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/4"}
          >
            Outside<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories
              ? <ProjectSection projects={allCategories[4]?.projects} />
              : null}
          </div>
        </div>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/5"}
          >
            Craft<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories
              ? <ProjectSection projects={allCategories[5]?.projects} />
              : null}
          </div>
        </div>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/6"}
          >
            Cooking<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories
              ? <ProjectSection projects={allCategories[6]?.projects} />
              : null}
          </div>
        </div>
        <div className={style.homeCategoriesDiv}>
          <NavLink
            className={style.homeSingleCategoryTitle}
            to={"/categories/7"}
          >
            Miscellaneous<span className="material-icons">chevron_right</span>
          </NavLink>
          <div className={style.homeCategoryProjectsHolder}>
            {allCategories
              ? <ProjectSection projects={allCategories[7]?.projects} />
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
