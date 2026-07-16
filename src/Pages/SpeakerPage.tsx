import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SpeakerPage.module.css';

// Import product images
import speakerZX9Img from '../assets/image-product (3).jpg';  // Swapped: Now using image-product (3).jpg for ZX9
import speakerZX7Img from '../assets/image-product (2).jpg';  // Swapped: Now using image-product (2).jpg for ZX7

// Import category images (reuse from HeadphonePage or import your own)
import headphonesImg from '../assets/image-headphones.png';
import speakersImg from '../assets/image-speakers.png';
import earphonesImg from '../assets/image-earphones.png';

// Import about section image
import bestGearImg from '../assets/image-best-gear.jpg';

// Import arrow icon
import arrowIcon from '../assets/icon-arrow-right.svg';

const SpeakerPage: React.FC = () => {
  return (
    <div className={styles.speakerPage}>
      {/* Header */}
      <header className={styles.pageHeader}>
        <h1>SPEAKERS</h1>
      </header>

      {/* Product Section - ZX9 Speaker (Now using image-product (3).jpg) */}
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <img src={speakerZX9Img} alt="ZX9 Speaker" />
          </div>
          <div className={styles.productContent}>
            <span className={styles.newProductBadge}>NEW PRODUCT</span>
            <h2>ZX9 SPEAKER</h2>
            <p>
              Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker 
              system that offers truly wireless connectivity -- 
              creating new possibilities for more pleasing and practical audio setups.
            </p>
            <Link to="/product/zx9-speaker" className={styles.btnPrimary}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Product Section - ZX7 Speaker (Now using image-product (2).jpg) */}
      <section className={styles.productSection}>
        <div className={`${styles.productContainer} ${styles.productContainerReverse}`}>
          <div className={styles.productImage}>
            <img src={speakerZX7Img} alt="ZX7 Speaker" />
          </div>
          <div className={styles.productContent}>
            <h2>ZX7 SPEAKER</h2>
            <p>
            Stream high quality sound wirelessly with minimal to no loss. 
            The ZX7 speaker uses high-end audiophile components that represents the top
             of the line powered speakers for home or studio use.
            </p>
            <Link to="/product/zx7-speaker" className={styles.btnPrimary}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className={styles.categoryNav}>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <img 
                src={headphonesImg} 
                alt="Headphones" 
                className={styles.categoryImage} 
              />
            </div>
            <h3>HEADPHONES</h3>
            <Link to="/headphones" className={styles.shopLink}>
              SHOP 
              <img 
                src={arrowIcon} 
                alt="" 
                aria-hidden="true" 
                className={styles.arrowIcon} 
              />
            </Link>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <img 
                src={speakersImg} 
                alt="Speakers" 
                className={styles.categoryImage} 
              />
            </div>
            <h3>SPEAKERS</h3>
            <Link to="/speakers" className={styles.shopLink}>
              SHOP 
              <img 
                src={arrowIcon} 
                alt="" 
                aria-hidden="true" 
                className={styles.arrowIcon} 
              />
            </Link>
          </div>

          <div className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <img 
                src={earphonesImg} 
                alt="Earphones" 
                className={styles.categoryImage} 
              />
            </div>
            <h3>EARPHONES</h3>
            <Link to="/earphones" className={styles.shopLink}>
              SHOP 
              <img 
                src={arrowIcon} 
                alt="" 
                aria-hidden="true" 
                className={styles.arrowIcon} 
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Best Gear Section - MATCHING HOMEPAGE LAYOUT: Content LEFT, Image RIGHT */}
      <section className={styles.bestGear}>
        <div className={styles.container}>
          <div className={styles.gearGrid}>
            {/* Content - LEFT side (matching HomePage) */}
            <div className={styles.gearContent}>
              <h2>
                BRINGING YOU THE <span>BEST</span> AUDIO GEAR
              </h2>
              <p>
                Located at the heart of New York City, Audiophile is the premier 
                store for high-end headphones, earphones, speakers, and audio 
                accessories. We have a large showroom and luxury demonstration 
                rooms available for you to browse and experience a wide range of 
                our products. Stop by our store to meet some of the finest audio 
                products you'll find at Audiophile.
              </p>
            </div>
            
            {/* Image - RIGHT side (matching HomePage) */}
            <div className={styles.gearImage}>
              <img 
                src={bestGearImg} 
                alt="Audiophile store showroom with premium audio equipment" 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakerPage;