import React, { useState } from 'react';
import styles from './Contact.module.css';
import { useLang } from '../i18n/LanguageContext';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { t } = useLang();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;
    const subject = `Contact from ${name || 'website visitor'}`;
    const body = `От: ${name || 'анонимен'} (${email || 'без имейл'})\n\n${message}`;
    const mailto = `mailto:dimitarivanov2525@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{t('contact.eyebrow')}</p>
        <h2>{t('contact.title')}</h2>
        <p className={styles.sub}>
          {t('contact.sub')}
        </p>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.label}>{t('contact.labels.phone')}</p>
          <a className={styles.cardLink} href="tel:+359879330389">+359 879 330 389</a>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>{t('contact.labels.email')}</p>
          <a className={styles.cardLink} href="mailto:dimitarivanov2525@gmail.com" title="dimitarivanov2525@gmail.com">
            dimitarivanov2525@gmail.com
          </a>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>{t('contact.labels.linkedin')}</p>
          <a className={styles.cardLink} href="https://www.linkedin.com/in/dimitar-ivanov-a1b49a232/" target="_blank" rel="noreferrer">
            linkedin.com/in/dimitar-ivanov-a1b49a232
          </a>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>{t('contact.labels.github')}</p>
          <a className={styles.cardLink} href="https://github.com/Dimitar32" target="_blank" rel="noreferrer">
            github.com/Dimitar32
          </a>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name">{t('contact.form.name')}</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder={t('contact.form.namePh')}
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="email">{t('contact.form.email')}</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder={t('contact.form.emailPh')}
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`${styles.fieldGroup} ${styles.full}`}>
          <label htmlFor="message">{t('contact.form.message')}</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder={t('contact.form.messagePh')}
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button type="submit" className={styles.primary}>{t('contact.form.submit')}</button>
          <a className={styles.secondary} href="/DimitarIvanovCV.pdf" download>{t('contact.form.download')}</a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
