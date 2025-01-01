import styles from '@components/Hero.module.scss';
import * as React from 'react';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Augment Intimacy</h1>
    </section>
  );
};

export default Hero; 