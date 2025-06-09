import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaFacebookMessenger } from 'react-icons/fa';
import styles from '../assets/styles/Footer.module.css';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Rsvp', href: '/rsvp' },
    { name: 'Dress Code', href: '/dresscode' },
    { name: 'Entourage', href: '/entourage' },
  ];

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.message}>
          With Love, <span>Julian & Christine</span>
        </li>

        <li className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href}>
              {link.name}
            </Link>
          ))}
        </li>

        <li className={styles.credit}>
          © 2025 Our Wedding. All rights reserved.
        </li>

        <li className={styles.dev}>
          Site developed by: <strong>Ronnel Santos</strong>
        </li>

        <li className={styles.socials}>
          <a
            href="https://facebook.com/ronnelsantos08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://m.me/ronnelsantos08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Messenger"
          >
            <FaFacebookMessenger />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
