import React, { useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo} >&lt;Dimitar Ivanov /&gt;</h1>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <nav className={`${styles.nav} ${isOpen ? styles.show : ''}`}>
        <a href="#basic">.info()</a>
        <a href="#experience">.experience()</a>
        <a href="#education">.education()</a>
        <a href="#courses">.courses()</a>
        <a href="#contact">.contact()</a>
      </nav>
    </header>
  );
}

export default Header;
