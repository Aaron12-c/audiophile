import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import cartIcon from '../assets/icon-cart.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* Hamburger Menu for Mobile - Left side */}
        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Logo - Centered on mobile */}
        <div className={styles.logo}>
          <NavLink to="/">audiophile</NavLink>
        </div>

        {/* Navigation Menu */}
        <nav 
          id="main-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={closeMenu}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/headphones" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={closeMenu}
              >
                HEADPHONES
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/speakers" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={closeMenu}
              >
                SPEAKERS
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/earphones" 
                className={({ isActive }) => isActive ? styles.active : ''}
                onClick={closeMenu}
              >
                EARPHONES
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Cart Button */}
        <div className={styles.cart}>
          <button 
            className={styles.cartButton} 
            aria-label="Shopping cart"
          >
            <img src={cartIcon} alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;