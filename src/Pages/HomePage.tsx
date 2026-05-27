import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';
import heroImage from '../assets/image-hero.jpg';
import imageHeadphones from '../assets/image-headphones.png';
import imageSpeakers from '../assets/image-speakers.png';
import imageEarphones from '../assets/image-earphones.png';
import bestGear from '../assets/image-best-gear.jpg';
import iconArrowRight from '../assets/icon-arrow-right.svg';
import patternCircles from '../assets/pattern-circles.svg';
import imageGallery from '../assets/image-gallery-2 (1).jpg';
import imageSpeakerZx9 from '../assets/image-speaker-zx9.png';

const HomePage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section 
        className={styles.hero}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className={styles.heroContainer}>
          <div className={`${styles.heroContent} ${isVisible ? styles.fadeInUp : ''}`}>
            <p className={styles.heroSubtitle}>NEW PRODUCT</p>
            <h1 className={styles.heroTitle}>XX99 MARK II HEADPHONES</h1>
            <p className={styles.heroDescription}>
              Experience natural, lifelike audio and exceptional build quality made 
              for the passionate music enthusiast.
            </p>
            <Link to="/product/xx99-mark-ii-headphones" className={styles.heroButton}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <div className={styles.categoryGrid}>
            {/* Headphones Category */}
            <div className={`${styles.categoryCard} ${isVisible ? styles.slideUp : ''}`}>
              <div className={styles.categoryImage}>
                <img src={imageHeadphones} alt="Headphones" />
              </div>
              <h3>HEADPHONES</h3>
              <Link to="/headphones" className={styles.categoryLink}>
                SHOP <img src={iconArrowRight} alt="" aria-hidden="true" />
              </Link>
            </div>

            {/* Speakers Category */}
            <div className={`${styles.categoryCard} ${isVisible ? styles.slideUp : ''}`}>
              <div className={styles.categoryImage}>
                <img src={imageSpeakers} alt="Speakers" />
              </div>
              <h3>SPEAKERS</h3>
              <Link to="/speakers" className={styles.categoryLink}>
                SHOP <img src={iconArrowRight} alt="" aria-hidden="true" />
              </Link>
            </div>

            {/* Earphones Category */}
            <div className={`${styles.categoryCard} ${isVisible ? styles.slideUp : ''}`}>
              <div className={styles.categoryImage}>
                <img src={imageEarphones} alt="Earphones" />
              </div>
              <h3>EARPHONES</h3>
              <Link to="/earphones" className={styles.categoryLink}>
                SHOP <img src={iconArrowRight} alt="" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZX9 Section */}
      <section className={styles.zx9Section}>
        <div className={styles.zx9Container}>
          <div className={styles.zx9PatternBg}>
            <img 
              src={patternCircles} 
              alt="" 
              className={styles.patternCirclesImg}
              aria-hidden="true"
            />
          </div>
          
          <div className={styles.zx9Content}>
            <div className={`${styles.zx9Image} ${isVisible ? styles.fadeInLeft : ''}`}>
              <div className={styles.zx9ImageWrapper}>
                <div className={styles.patternCircleBg}>
                  <img 
                    src={patternCircles} 
                    alt="" 
                    className={styles.innerPatternCircle}
                    aria-hidden="true"
                  />
                </div>
                <img 
                  src={imageSpeakerZx9} 
                  alt="ZX9 Premium Speaker" 
                  className={styles.zx9SpeakerImg}
                />
              </div>
            </div>
            
            <div className={`${styles.zx9Text} ${isVisible ? styles.fadeInRight : ''}`}>
              <h2>ZX9 SPEAKER</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to deliver 
                truly remarkable sound. Experience audio purity like never before.
              </p>
              <Link to="/product/zx9-speaker" className={styles.zx9Button}>
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZX7 Section */}
      <section className={styles.zx7Section}>
        <div className={styles.container}>
          <div className={`${styles.zx7Card} ${isVisible ? styles.zoomIn : ''}`}>
            <div className={styles.zx7Content}>
              <h2>ZX7 SPEAKER</h2>
              <Link to="/product/zx7-speaker" className={styles.zx7Button}>
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YX1 Section */}
      <section className={styles.yx1Section}>
        <div className={styles.container}>
          <div className={styles.yx1Grid}>
            <div className={`${styles.yx1Image} ${isVisible ? styles.fadeInLeft : ''}`}>
              <img src={imageGallery} alt="YX1 Earphones on display" />
            </div>
            
            <div className={`${styles.yx1ContentCard} ${isVisible ? styles.fadeInRight : ''}`}>
              <div className={styles.yx1CardWrapper}>
                <h2>YX1 EARPHONES</h2>
                <Link to="/product/yx1-earphones" className={styles.yx1Button}>
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Gear Section */}
      <section className={styles.bestGear}>
        <div className={styles.container}>
          <div className={styles.gearGrid}>
            <div className={`${styles.gearContent} ${isVisible ? styles.fadeInLeft : ''}`}>
              <h2>
                BRINGING YOU THE <span>BEST</span> AUDIO GEAR
              </h2>
              <p>
                Located at the heart of New York City, 
                Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories.
                We have a large showroom and luxury demonstration rooms available for you to browse and experience a 
                wide range of our products. 
                Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
              </p>
            </div>
            <div className={`${styles.gearImage} ${isVisible ? styles.fadeInRight : ''}`}>
              <img src={bestGear} alt="Person enjoying premium audio gear" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;