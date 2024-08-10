import React from 'react';
import Button from '../button';
import styles from './style.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1>
          Never Stop <span className={styles.highlight}>Learning</span><br />
          Life <span className={styles.highlight}>Never Stop</span> Teaching
        </h1>
        <p>Every teaching and learning journey is unique. We'll help guide your way.</p>
        <Button className={styles.btnPrimary}>Start Free Trial</Button>
      </div>
      <div className={styles.heroImage}>
        <img src="/path-to-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
