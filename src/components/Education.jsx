import React from 'react';
import styles from './Education.module.css';

function Education() {
  return (
    <section className={styles.education} id="education">
      <h2>{'// Education'}</h2>

      <div className={styles.entry}>
        <h3>University of Plovdiv “Paisii Hilendarski”</h3>
        <p className={styles.subtitle}>Barchelor Degree – Informatics</p>
        <p className={styles.date}>September 2021 – July 2025</p>
      </div>

      <div className={styles.entry}>
        <h3>School of Maths and Science “Geo Milev”, Stara Zagora</h3>
        <p className={styles.subtitle}>Secondary Education – Informatics</p>
        <p className={styles.date}>September 2013 – May 2021</p>
      </div>
    </section>
  );
}

export default Education;
