import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>&copy; 2021</span>
      </div>

      <div className={styles.links}>
        <Link href='/'>
          <a className={styles.footerLink}>
            <span>About</span>
          </a>
        </Link>
        <a className={styles.footerLink} href='mailto:records@mail.com'>
          records@mail.com
        </a>
      </div>
    </div>
  );
};
