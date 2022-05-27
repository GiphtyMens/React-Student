import React from "react";
import styles from "./Project.module.css";
import { projects } from "./projects";

const Project = () => {
  return (
    <div className={styles.Project}>
      <div className={styles.Project_text}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.Project_card1}>
        {projects.map((project, idx) => (
          <div className={styles.Project_card} key={idx}>
            <div className={styles.card_image}>
              <img src={project.image} alt="" />
            </div>
            <div className={styles.card_text}>
              <h1>{project.name}</h1>
              <p>{project.content}</p>
              <h4>{project.stack}</h4>
            </div>
          </div>
        ))}

        {/* <div className={styles.Project_card}>
          <div className={styles.card_image}>
            <img src="" alt="" />
          </div>
          <div className={styles.card_text}>
            <h1>name</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <h4>stack</h4>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
