import React from 'react';
import styles from './BasicInfo.module.css';
import profilePic from '../Dimitar Ivanov.png';
import { useLang } from '../i18n/LanguageContext';

function calculateAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

function BasicInfo() {
  const birthDate = '2002-11-14';
  const age = calculateAge(birthDate);
  const { t } = useLang();
  const ageText = typeof t('basic.age') === 'function' ? t('basic.age')(age) : t('basic.age');

  return (
    <section className={styles.info} id="basic">
      <div className={styles.wrapper}>
        <div className={styles.media}>
          <img
            src={profilePic}
            alt="Dimitar Ivanov"
            className={styles.photo}
          />
          <div className={styles.badge}>{t('basic.badge')}</div>
        </div>

        <div className={styles.details}>
          <p className={styles.eyebrow}>{t('basic.hello')}</p>
          <h1 className={styles.title}>{t('basic.title')}</h1>
          <p className={styles.lead}>
            {t('basic.lead')}
          </p>

          <div className={styles.meta}>
            <span>{t('basic.location')}</span>
            <span>{ageText}</span>
          </div>

          <div className={styles.links}>
            <a href="mailto:dimitarivanov2525@gmail.com">dimitarivanov2525@gmail.com</a>
            <a href="https://www.linkedin.com/in/dimitar-ivanov-a1b49a232/" target="_blank" rel="noreferrer">
              {t('basic.links.linkedin')}
            </a>
            <a href="https://github.com/Dimitar32" target="_blank" rel="noreferrer">
              {t('basic.links.github')}
            </a>
          </div>

          <div className={styles.actions}>
            <a
              href="/DimitarIvanovCV.pdf"
              download
              className={styles.primary}
            >
              {t('basic.buttons.download')}
            </a>
            <a className={styles.secondary} href="#contact">{t('basic.buttons.contact')}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
