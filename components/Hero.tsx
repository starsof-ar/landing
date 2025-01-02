import styles from '@components/Hero.module.scss';
import * as React from 'react';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>AUGMENT</h1>
    </section>
  );
};

export default Hero; 