import React from 'react';
import styles from './Courses.module.css';

function Courses() {
  return (
    <section className={styles.courses} id="courses">
      <h2>{'// Courses'}</h2>

      <ul className={styles.list}>
        <li>
          <span className={styles.courseTitle}>Java Development Fundamentals</span> – Infinno Internal Training
        </li>
        <li>
          <span className={styles.courseTitle}>SQL for Data Management</span> – Udemy
        </li>
        <li>
          <span className={styles.courseTitle}>Object-Oriented Programming (OOP)</span> – University Curriculum
        </li>
      </ul>
    </section>
  );
}

export default Courses;
