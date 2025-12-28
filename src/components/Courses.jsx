import React from 'react';
import styles from './Courses.module.css';
import { useLang } from '../i18n/LanguageContext';

function Courses() {
  const { t } = useLang();
  const courses = t('courses.items') || [];

  return (
    <section className={styles.courses} id="courses">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t('courses.eyebrow')}</p>
        <h2>{t('courses.title')}</h2>
      </div>

      <div className={styles.grid}>
        {courses.map((course) => (
          <div className={styles.card} key={course.title}>
            <div className={styles.top}>
              <h3>{course.title}</h3>
              <span className={styles.year}>{course.year}</span>
            </div>
            <p className={styles.org}>{course.org}</p>
            <p className={styles.summary}>{course.summary}</p>
            <a className={styles.link} href={course.link} target="_blank" rel="noreferrer">
              {t('courses.cta')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
