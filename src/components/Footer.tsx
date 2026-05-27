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
                Audiophile is an all-in-one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are devoted to
                helping you get the most out of personal audio.
                Come and visit our demo facility - we're open 7 days a week.
              </p>
              <p className={styles.copyright}>
                Copyright 2021. All Rights Reserved
              </p>
            </div>

            <div className={styles.socialLinks}>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <img src={iconFacebook} alt="" aria-hidden="true" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
              >
                <img src={iconTwitter} alt="" aria-hidden="true" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <img src={iconInstagram} alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;