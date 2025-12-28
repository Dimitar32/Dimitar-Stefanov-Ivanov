import React from 'react';
import styles from './Education.module.css';
import { useLang } from '../i18n/LanguageContext';

const Education = () => {
  const { t } = useLang();
  const items = t('education.items') || [];

  return (
    <section className={styles.education} id="education">
      <div className={styles.header}>
        <h2 className={styles.eyebrow}>{t('education.eyebrow')}</h2>
        {/* <h2>{t('education.title')}</h2> */}
      </div>

      <div className={styles.list}>
        {items.map((item) => (
          <div className={styles.card} key={item.org}>
            <div className={styles.logoBox}>
              {item.logoSrc ? (
                <img src={item.logoSrc} alt={item.org} className={styles.logoImg} />
              ) : (
                <div className={styles.logo}>{item.logo}</div>
              )}
            </div>
            <div className={styles.body}>
              <div className={styles.topRow}>
                <h3>{item.org}</h3>
                <span className={styles.period}>{item.period}</span>
              </div>
              <p className={styles.degree}>{item.degree}</p>
              {item.activities && <p className={styles.activities}>{item.activities}</p>}
              {item.extra && <p className={styles.extra}>{item.extra}</p>}
              <div className={styles.skills}>
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
