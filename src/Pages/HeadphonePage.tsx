import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeadphonePage.module.css';

// Import product images
import xx99MarkTwoImg from '../assets/image-xx99-mark-two.jpg';
import xx99MarkOneImg from '../assets/image-xx99-mark-one-headphones (1).jpg';
import xx59Img from '../assets/image-xx59.jpg';

// Import category images
import headphonesImg from '../assets/image-headphones.png';
import speakersImg from '../assets/image-speakers.png';
import earphonesImg from '../assets/image-earphones.png'; // Changed this line

// Import about section image
import bestGearImg from '../assets/image-best-gear.jpg';

// Import arrow icon
import arrowIcon from '../assets/icon-arrow-right.svg';

const HeadphonePage: React.FC = () => {
  return (
    <div className={styles.headphonePage}>
      {/* Header */}
      <header className={styles.pageHeader}>
        <h1>HEADPHONES</h1>
      </header>

      {/* Product Section - XX99 Mark II (Left) */}
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <img src={xx99MarkTwoImg} alt="XX99 Mark II Headphones" />
          </div>
          <div className={styles.productContent}>
            <span className={styles.newProductBadge}>NEW PRODUCT</span>
            <h2>XX99 MARK II HEADPHONES</h2>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio. 
              It redefines your premium headphone experience by reproducing the 
              balanced depth and precision of studio-quality sound.
            </p>
            <Link to="/product/xx99-mark-two" className={styles.btnPrimary}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Product Section - XX99 Mark I (Right) */}
      <section className={styles.productSection}>
        <div className={`${styles.productContainer} ${styles.productContainerReverse}`}>
          <div className={styles.productImage}>
            <img src={xx99MarkOneImg} alt="XX99 Mark I Headphones" />
          </div>
          <div className={styles.productContent}>
            <h2>XX99 MARK I HEADPHONES</h2>
            <p>
              As the gold standard for headphones, the classic XX99 Mark I offers 
              detailed and accurate audio reproduction for audiophiles, mixing 
              engineers, and music aficionados alike in studios and on the go.
            </p>
            <Link to="/product/xx99-mark-one" className={styles.btnPrimary}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Product Section - XX59 (Left) */}
      <section className={styles.productSection}>
        <div className={styles.productContainer}>
          <div className={styles.productImage}>
            <img src={xx59Img} alt="XX59 Headphones" />
          </div>
          <div className={styles.productContent}>
            <h2>XX59 HEADPHONES</h2>
            <p>
              Enjoy your audio almost anywhere and customize it to your specific 
              tastes with the XX59 headphones. The stylish yet durable versatile 
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <Link to="/product/xx59" className={styles.btnPrimary}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Category Navigation with Images */}
      <section className={styles.categoryNav}>
        <div className={styles.categoryGrid}>
          {/* Headphones Category */}
          <div className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <img src={headphonesImg} alt="Headphones" className={styles.categoryImage} />
            </div>
            <h3>HEADPHONES</h3>
            <Link to="/headphones" className={styles.shopLink}>
              SHOP <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Speakers Category */}
          <div className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <img src={speakersImg} alt="Speakers" className={styles.categoryImage} />
            </div>
            <h3>SPEAKERS</h3>
            <Link to="/speakers" className={styles.shopLink}>
              SHOP <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
            </Link>
          </div>

          {/* Earphones Category */}
          <div className={styles.categoryCard}>
            <div className={styles.categoryImageWrapper}>
              <img src={earphonesImg} alt="Earphones" className={styles.categoryImage} />
            </div>
            <h3>EARPHONES</h3>
            <Link to="/earphones" className={styles.shopLink}>
              SHOP <img src={arrowIcon} alt="Arrow" className={styles.arrowIcon} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className={styles.aboutSection}>
        <div className={`${styles.aboutContainer} ${styles.aboutContainerReverse}`}>
          <div className={styles.aboutContent}>
            <h2>
              BRINGING YOU THE <span>BEST AUDIO GEAR</span>
            </h2>
            <p>
              Located at the heart of New York City, Audiophile is the premier 
              store for high-end headphones, earphones, speakers, and audio 
              accessories. We have a large showroom and luxury demonstration 
              rooms available for you to browse and experience a wide range of 
              our products. Stop by our store to meet some of the fantastic 
              people who make Audiophile the best place to buy your portable 
              audio equipment.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <img src={bestGearImg} alt="Best Audio Gear" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadphonePage;