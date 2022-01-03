import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>&copy; 2022</span>
      </div>

      <div className={styles.links}>
        <Link href='/about'>
          <a className={styles.footerLink}>
            <span>About</span>
          </a>
        </Link>
        <a className={styles.footerLink} href='mailto:info@record.com'>
          info@record.com
        </a>
      </div>
    </div>
  );
};
