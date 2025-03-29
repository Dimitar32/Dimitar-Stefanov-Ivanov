import React from 'react';
import styles from './BasicInfo.module.css';
import profilePic from '../Dimitar Ivanov.png'; // Adjust the path as necessary

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
    const birthDate = '2002-11-14'; // Format: YYYY-MM-DD
    const age = calculateAge(birthDate);
  
    return (
        <section className={styles.info} id="basic">
        <div className={styles.wrapper}>
            <img
            src={profilePic}
            alt="Dimitar Ivanov"
            className={styles.photo}
            />
            <div className={styles.details}>
            <p><span className={styles.label}>Name:</span> Dimitar Stefanov Ivanov</p>
            <p><span className={styles.label}>Email:</span> <a href="mailto:dimitarivanov2525@gmail.com">dimitarivanov2525@gmail.com</a></p>
            <p><span className={styles.label}>Phone:</span> 0879330389</p>
            <p><span className={styles.label}>LinkedIn:</span> <a href="https://www.linkedin.com/in/dimitar-ivanov-a1b49a232/" target="_blank" rel="noreferrer">Dimitar Ivanov</a></p>
            <p><span className={styles.label}>Age:</span> {age} years</p>
            <p><span className={styles.label}>Location:</span> Sofia, Bulgaria</p>
            <p><span className={styles.label}>Interests:</span> Programming · Database · AI · Football</p>
            </div>
        </div>
        </section>
    );
}

export default BasicInfo;
