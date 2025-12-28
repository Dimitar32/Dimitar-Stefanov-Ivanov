import React from 'react';
import styles from './Projects.module.css';
import { useLang } from '../i18n/LanguageContext';

const Projects = () => {
  const { t } = useLang();
  const projects = t('projects.items') || [];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t('projects.eyebrow')}</p>
        <h2>{t('projects.title')}</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.title}>
            <div className={styles.top}>
              <h3>{project.title}</h3>
              <p className={styles.stack}>{project.stack}</p>
            </div>
            <p className={styles.summary}>{project.summary}</p>
            <a className={styles.link} href={project.link} target="_blank" rel="noreferrer">
              {t('projects.cta')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
