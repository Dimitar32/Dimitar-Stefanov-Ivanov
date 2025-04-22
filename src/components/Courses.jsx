import React from 'react';
import styles from './Courses.module.css';

function Courses() {
  return (
    <section className={styles.courses} id="courses">
      <h2>{'// Courses'}</h2>

      <ul className={styles.list}>
        <li>
          <span className={styles.courseTitle}>Math Concepts for Developers 2025</span> – SoftUni
        </li>
        <li>
          <span className={styles.courseTitle}>Algorithms with Python 2024</span> – SoftUni
        </li>
        <li>
          <span className={styles.courseTitle}>.NET Core 8 with MS SQL 2024</span> – Udemy
        </li>
        <li>
          <span className={styles.courseTitle}>SQL (Advanced) 2023</span> – HackerRank
        </li>
        <li>
          <span className={styles.courseTitle}>Java (Basic) 2023</span> – HackerRank
        </li>
      </ul>
    </section>
  );
}

export default Courses;
