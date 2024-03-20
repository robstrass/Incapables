import style from "./HomePage.module.css";

import ProjectFeature from "../../shared/ProjectFeature";

export default function FeaturedProject({ projects, projectKeys }) {
  const randomNum =
    projectKeys[Math.floor(Math.random() * projectKeys.length - 1)];

  return (
    <div className={style.homeFeatureDiv}>
      {projects && (
        <ProjectFeature
          style={style}
          projects={projects}
          randomNum={randomNum}
        />
      )}
    </div>
  );
}
