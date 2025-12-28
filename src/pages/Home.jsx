import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import BasicInfo from '../components/BasicInfo';
import About from '../components/About';
import Projects from '../components/Projects';
import PaperNews from '../components/PaperNews';
import Contact from '../components/Contact';
import { useLang } from '../i18n/LanguageContext';

function Home() {
  const { t } = useLang();

  return (
    <div className={styles.stack}>
      <BasicInfo />
      <About />

      <section className={styles.quickLinks}>
        <div className={styles.quickHeader}>
          <p className={styles.eyebrow}>{t('home.eyebrow')}</p>
          <h2>{t('home.browse')}</h2>
        </div>
        <div className={styles.linksGrid}>
          <Link to="/experience" className={styles.card}>{t('home.links.experience')}</Link>
          <Link to="/education" className={styles.card}>{t('home.links.education')}</Link>
          <Link to="/courses" className={styles.card}>{t('home.links.courses')}</Link>
          <Link to="/projects" className={styles.card}>{t('home.links.projects')}</Link>
          <Link to="/papers" className={styles.card}>{t('home.links.papers')}</Link>
          <Link to="/contact" className={styles.card}>{t('home.links.contact')}</Link>
        </div>
      </section>

      <Projects />
      <PaperNews />
      <Contact />
    </div>
  );
}

export default Home;
