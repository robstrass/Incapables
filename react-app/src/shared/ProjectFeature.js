import { NavLink } from "react-router-dom";

export default function ProjectFeature({style, projects, randomNum}) {
  const selectedProject = projects[randomNum] ? randomNum : 0;

  return (
    <>
      <img
        alt="The Featured Project"
        className={style.homeFeatureImg}
        src={projects[selectedProject]?.images[0]?.image}
      />
      <NavLink
        className={style.homeFeatureContent}
        to={`/projects/${projects[selectedProject]?.id}`}
      >
        <h1 className={style.homeFeatureTitle}>{projects[selectedProject]?.title}</h1>
        <h3 className={style.homeFeatureAuthor}>
          by {projects[selectedProject]?.author.username}
        </h3>
        <p className={style.homeFeatureContentP}>
          {projects[selectedProject]?.content}
        </p>
      </NavLink>
    </>
  );
}
