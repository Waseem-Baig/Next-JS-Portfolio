import React from "react";
import styles from "./ProjectsMarquee.module.css";

interface Project {
  id: number;
  name: string;
  description: string;
  link: string;
}

interface ProjectsMarqueeProps {
  projects: Project[];
}

const ProjectsMarquee: React.FC<ProjectsMarqueeProps> = ({ projects }) => {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        {projects.map((project) => (
          <a key={project.id} href={project.link} className={styles.project}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMarquee;
