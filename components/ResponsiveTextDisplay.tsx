import React from 'react';
import styles from './ResponsiveTextDisplay.module.scss';

interface ResponsiveTextDisplayProps {
  data: { text1: string; text2: string; text3: string };
}

const ResponsiveTextDisplay: React.FC<ResponsiveTextDisplayProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div>{data.text1}</div>
      <div>{data.text2}</div>
      <div>{data.text3}</div>
    </div>
  );
};

export default ResponsiveTextDisplay;