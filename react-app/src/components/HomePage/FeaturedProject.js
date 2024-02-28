import React from "react";
import { NavLink } from "react-router-dom";

import style from "./HomePage.module.css";

export default function FeaturedProject({ projects, projectKeys }) {
  const randomNum =
    projectKeys[Math.floor(Math.random() * projectKeys.length - 1)];

  return (
    <>
      {projects && projects[randomNum]?.images[0]?.image ? (
        <div className={style.homeFeatureDiv}>
          <img
            alt="The Featured Project"
            className={style.homeFeatureImg}
            src={projects[randomNum]?.images[0]?.image}
          />
          <NavLink
            className={style.homeFeatureContent}
            to={`/projects/${projects[randomNum]?.id}`}
          >
            <h1 className={style.homeFeatureTitle}>
              {projects[randomNum]?.title}
            </h1>
            <h3 className={style.homeFeatureAuthor}>
              by {projects[randomNum]?.author.username}
            </h3>
            <p className={style.homeFeatureContentP}>
              {projects[randomNum]?.content}
            </p>
          </NavLink>
        </div>
      ) : (
        <div className={style.homeFeatureDiv}>
          <img
            alt="The Featured Project"
            className={style.homeFeatureImg}
            src={projects[0]?.images[0]?.image}
          />
          <NavLink
            className={style.homeFeatureContent}
            to={`/projects/${projects[0]?.id}`}
          >
            <h1 className={style.homeFeatureTitle}>{projects[0]?.title}</h1>
            <h3 className={style.homeFeatureAuthor}>
              by {projects[0]?.author.username}
            </h3>
            <p className={style.homeFeatureContent}>{projects[0]?.content}</p>
          </NavLink>
        </div>
      )}
    </>
  );
}
