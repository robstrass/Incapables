import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import style from "./HomePage.module.css";

import FeaturedProject from "./FeaturedProject";
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

  return (
    <div className={style.homeContainer}>
      <div className={style.homeFeatured}>
        <div className={style.homePageFeatureBlur}></div>
        <FeaturedProject projects={projects} projectKeys={projectKeys} />
      </div>
      <div className={style.homeInfoContainer}>
        <div className={style.homeInfoSingleDiv}>
          <h2 className={style.homeInfoTitle}>{COPY.STEP_BY_STEP}</h2>
          <p className={style.homeInfoContent}>{COPY.HOMEPAGE_1}</p>
        </div>
        <div className={style.homeInfoSingleDiv}>
          <h2 className={style.homeInfoTitle}>{COPY.CURATED_BY_YOUR_PEERS}</h2>
          <p className={style.homeInfoContent}>{COPY.HOMEPAGE_2}</p>
        </div>
        <div className={style.homeInfoSingleDiv}>
          <h2 className={style.homeInfoTitle}>{COPY.FAMILY_FRIENDLY}</h2>
          <p className={style.homeInfoContent}>{COPY.HOMEPAGE_3}</p>
        </div>
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
            {allCategories
              ? allCategories[1]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
              : null}
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
            {allCategories
              ? allCategories[2]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
              : null}
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
              ? allCategories[3]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
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
              ? allCategories[4]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
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
              ? allCategories[5]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
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
              ? allCategories[6]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
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
              ? allCategories[7]?.projects.slice(0, 4).map(project => (
                  <NavLink
                    key={project.id}
                    className={style.homeCategorySingleCategoryHolder}
                    to={`/projects/${project.id}`}
                  >
                    {project.images[0]?.image ? (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={project.images[0]?.image}
                      />
                    ) : (
                      <img
                        className={style.homeCategorySingleCategoryImg}
                        src={
                          "https://res.cloudinary.com/depdd11lz/image/upload/v1640226348/No_image.svg_alrhuo.png"
                        }
                      />
                    )}
                    <div className={style.homeCategorySingleCategoryInfo}>
                      <p className={style.homeCategoryTitleP}>
                        {project.title}{" "}
                        <span className={style.homeCategoryAuthor}>
                          by {project.author?.username}
                        </span>
                      </p>
                    </div>
                  </NavLink>
                ))
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
