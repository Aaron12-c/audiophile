// C:\Users\Aaron Hope\Desktop\audiophile\frontend\src\components\Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import iconFacebook from '../assets/icon-facebook.svg';
import iconTwitter from '../assets/icon-twitter.svg';
import iconInstagram from '../assets/icon-instagram.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.border}></div>
        
        <div className={styles.footerContent}>
          <div className={styles.footerTop}>
            <div className={styles.logo}>
              <Link to="/">audiophile</Link>
            </div>
            <ul className={styles.footerNav}>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/headphones">HEADPHONES</Link></li>
              <li><Link to="/speakers">SPEAKERS</Link></li>
              <li><Link to="/earphones">EARPHONES</Link></li>
            </ul>
          </div>

          <div className={styles.footerBottom}>
            <div className={styles.footerText}>
              <p>
              Audiophile is an all in one stop to fulfill your audio needs.
               We're a small team of music lovers and sound specialists who are devoted to
                helping you get the most out of personal audio.
                Come and visit our demo facility - we’re open 7 days a week.
              </p>
              <p className={styles.copyright}>
                Copyright 2021. All Rights Reserved
              </p>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={iconFacebook} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={iconTwitter} alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={iconInstagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;