import React from 'react';
import styles from './Experience.module.css';

function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <h2>{'// Experience'}</h2>

      <div className={styles.job}>
        <h3>Database Developer <span>eDynamix Bulgaria Ltd</span></h3>
        <p className={styles.date}>July 2023 – Present</p>
        <ul>
          <li>Designed, implemented and optimized complex SQL Server procedures and functions.</li>
          <li>Created and optimized database tables, views and indexes.</li>
          <li>Resolved performance issues and optimized queries.</li>
          <li>Developed SSRS reports for data visualization.</li>
          <li>Used Git for version control and collaboration.</li>
        </ul>
      </div>

      <div className={styles.job}>
        <h3>Intern Java Developer <span>Infinno LLC</span></h3>
        <p className={styles.date}>July 2022 – November 2022</p>
        <ul>
          <li>Applied OOP, data structures, and algorithms in Java.</li>
          <li>Integrated JDBC for secure database connections.</li>
          <li>Built and optimized SQL queries for MySQL.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
