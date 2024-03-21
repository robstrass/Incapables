import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import style from "./HomePage.module.css";

export default function ProjectSection({ projects }) {
  return (
    <>
      {projects?.slice(0, 4).map(project => (
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
      ))}
    </>
  );
}
