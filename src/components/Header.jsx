import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useLang } from '../i18n/LanguageContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const toggleLang = () => setLang(lang === 'bg' ? 'en' : 'bg');

  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <div className={styles.logo}>&lt;Dimitar Ivanov /&gt;</div>
        <p className={styles.subtitle}>{t('header.subtitle')}</p>
      </div>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
        <Link to="/experience" onClick={() => setIsOpen(false)}>{t('nav.experience')}</Link>
        <Link to="/education" onClick={() => setIsOpen(false)}>{t('nav.education')}</Link>
        <Link to="/courses" onClick={() => setIsOpen(false)}>{t('nav.courses')}</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>{t('nav.projects')}</Link>
        <Link to="/papers" onClick={() => setIsOpen(false)}>{t('nav.papers')}</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
        {/* <a className={styles.cta} href="/DimitarIvanovCV.pdf" download>{t('nav.download')}</a> */}
        <button type="button" className={styles.langSwitch} onClick={toggleLang}>
          {lang === 'bg' ? 'EN' : 'BG'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
