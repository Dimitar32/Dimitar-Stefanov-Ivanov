import React from 'react';
import styles from './About.module.css';
import { useLang } from '../i18n/LanguageContext';

const About = () => {
  const { t } = useLang();

  return (
    <section className={styles.about} id="about">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
        <h2 className={styles.title}>{t('about.title')}</h2>
      </div>
      <p className={styles.body}>
        {t('about.body')}
      </p>
      <div className={styles.tags}>
        {t('about.tags').map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </section>
  );
};

export default About;
