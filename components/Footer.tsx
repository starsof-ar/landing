import styles from './Footer.module.scss';
import { FaTwitter, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Badge from '@components/Badge';
import Grid from '@components/Grid';
import Row from '@components/Row';
import ActionListItem from '@components/ActionListItem-updated';

export default function Footer({ companyName = 'Company Name', packageVersion = '1.0.0' }) {
  const socialLinks = [
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaDiscord />, url: 'https://discord.com', label: 'Discord' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className={styles.footer}>
      <Grid>
        <Row>
          <div className={styles.container}>
            <div className={`${styles.column} ${styles.main}`}>

              <span className={styles.companyName} >{companyName}&nbsp;</span>
              
                
                  <Badge>Version {packageVersion}</Badge>


              <div className={styles.subtitle}>Join our Community</div>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className={`${styles.column} ${styles.secondary}`}>
              <div className={styles.columnTitle}>Company</div>
              <ul className={styles.links}>
                <li><a href="/about">About</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/press">Press</a></li>
              </ul>
            </div>

            <div className={`${styles.column} ${styles.secondary}`}>
              <div className={styles.columnTitle}>Product</div>
              <ul className={styles.links}>
                <li><a href="/map">WebXR App (map)</a>
                <ActionListItem 
                  icon={`⭢`} 
                  href="https://github.com/starsof-ar/landing" 
                  target="_blank" 
                  style={{whiteSpace: 'nowrap'}}
                  animate={true}
                >
                  source code
                </ActionListItem>
                </li>
                <li><a href="/map">Developer Portal</a>
                <ActionListItem 
                  icon={`⭢`} 
                  href="https://github.com/starsof-ar/landing" 
                  target="_blank" 
                  style={{whiteSpace: 'nowrap'}}
                  animate={true}
                >
                  source code
                </ActionListItem>
                </li>
              </ul>

            </div>

            <div className={`${styles.column} ${styles.secondary}`}>
              <div className={styles.columnTitle}>Resources</div>
              <ul className={styles.links}>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/support">Support</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </Row>
      </Grid>
    </footer>
  );
} 