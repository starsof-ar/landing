import styles from '@components/Footer.module.scss';
import * as React from 'react';
import { FaXTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaDiscord } from 'react-icons/fa6';

interface FooterProps {
  companyName: string;
}

const Footer: React.FC<FooterProps> = ({ companyName }) => {
  const socialLinks = [
    { icon: <FaXTwitter />, url: 'https://twitter.com/starsofar' },
    { icon: <FaYoutube />, url: 'https://youtube.com/@starsofar' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/company/starsofar' },
    { icon: <FaGithub />, url: 'https://github.com/starsof-ar' },
    { icon: <FaInstagram />, url: 'https://instagram.com/starsofar' },
    { icon: <FaTiktok />, url: 'https://tiktok.com/@starsofar' },
    { icon: <FaDiscord />, url: 'https://discord.gg/starsofar' },
  ];

  return (
    <footer className={styles.root}>
      <div className={styles.content}>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.socials}>
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 