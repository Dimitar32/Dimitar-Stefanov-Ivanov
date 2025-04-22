import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Dimitar Ivanov</p>
      <p>{'// built with React'}</p>
    </footer>
  );
}

export default Footer;
