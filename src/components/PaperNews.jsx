import React from 'react';
import styles from './PaperNews.module.css';
import { useLang } from '../i18n/LanguageContext';

const PaperNews = () => {
  const { t } = useLang();
  const items = t('papers.items') || [];

  return (
    <section className={styles.papernews} id="papernews">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t('papers.eyebrow')}</p>
        <h2>{t('papers.title')}</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <div className={styles.card} key={item.title}>
            <div className={styles.top}>
              <span className={styles.badge}>{item.type}</span>
              <span className={styles.date}>{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p className={styles.summary}>{item.summary}</p>
            <a className={styles.link} href={item.link} target="_blank" rel="noreferrer">
              {t('papers.cta')}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaperNews;
