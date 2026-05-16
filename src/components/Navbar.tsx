// C:\Users\Aaron Hope\Desktop\audiophile\frontend\src\components\Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import cartIcon from '../assets/icon-cart.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Hamburger Menu for Mobile - Left side */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Logo - Centered on mobile */}
        <div className={styles.logo}>
          <Link to="/">audiophile</Link>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            <li><Link to="/headphones" onClick={() => setIsMenuOpen(false)}>HEADPHONES</Link></li>
            <li><Link to="/speakers" onClick={() => setIsMenuOpen(false)}>SPEAKERS</Link></li>
            <li><Link to="/earphones" onClick={() => setIsMenuOpen(false)}>EARPHONES</Link></li>
          </ul>
        </nav>

        {/* Cart Icon - No count badge */}
        <div className={styles.cart}>
          <button className={styles.cartButton} aria-label="Shopping cart">
            <img src={cartIcon} alt="Cart" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;