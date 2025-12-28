import React from 'react';
import styles from './Experience.module.css';
import { useLang } from '../i18n/LanguageContext';

const Experience = () => {
  const { t } = useLang();
  const roles = t('experience.items') || [];

  return (
    <section className={styles.experience} id="experience">
      <div className={styles.header}>
        <h2 className={styles.eyebrow}>{t('experience.eyebrow')}</h2>
        {/* <h2>{t('experience.title')}</h2> */}
      </div>

      <div className={styles.list}>
        {roles.map((role) => (
          <div className={styles.item} key={role.title + role.company + role.period}>
            <div className={styles.top}>
              <div>
                <h3>{role.title}</h3>
                <p className={styles.company}>{role.company}</p>
              </div>
              <span className={styles.period}>{role.period}</span>
            </div>
            <ul>
              {role.bullets.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
