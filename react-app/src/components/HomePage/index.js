import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import style from "./HomePage.module.css";

import FeaturedProject from "./FeaturedProject";
import HomePageInfo from "./HomePageInfo";
import ProjectSectionHeader from "./ProjectSectionHeader";
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
  const categories = Object.values(allCategories);

  useEffect(() => {
    dispatch(categoriesActions.allCategoriesThunk());
    dispatch(projectActions.allProjectsThunk());
  }, [dispatch]);

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
        {categories &&
          categories.map((category, idx) => (
            <ProjectSectionHeader category={category} keyVal={idx} />
          ))}
      </div>
      <Footer />
    </div>
  );
}
