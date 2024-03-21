import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import style from "./HomePage.module.css";

import ProjectSection from "./ProjectSection";

export default function ProjectSectionHeader({ category, keyVal }) {
  const { category: projectCategory, projects, id } = category;

  return (
    <div className={style.homeCategoriesDiv} key={keyVal}>
      <NavLink
        className={style.homeSingleCategoryTitle}
        to={`/categories/${id}`}
      >
        {projectCategory}
        <span className="material-icons">chevron_right</span>
      </NavLink>
      <div className={style.homeCategoryProjectsHolder}>
        {projects ? <ProjectSection projects={projects} /> : null}
      </div>
    </div>
  );
}
