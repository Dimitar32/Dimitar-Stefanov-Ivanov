import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className={styles.contact} id="contact">
      <h2>{'// Contact me'}</h2>
      {submitted && <p className={styles.success}>Your message has been (pretend) sent!</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message..." rows="5" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
