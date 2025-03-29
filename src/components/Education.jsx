import React from 'react';
import styles from './Education.module.css';

function Education() {
  return (
    <section className={styles.education} id="education">
      <h2>{'// Education'}</h2>

      <div className={styles.entry}>
        <h3>Plovdiv University “Paisii Hilendarski”</h3>
        <p className={styles.subtitle}>4th Year Student – Informatics</p>
      </div>

      <div className={styles.entry}>
        <h3>School of Maths and Science “Geo Milev”, Stara Zagora</h3>
        <p className={styles.subtitle}>Secondary Education – Informatics</p>
      </div>
    </section>
  );
}

export default Education;
