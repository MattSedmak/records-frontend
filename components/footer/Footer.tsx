import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <span>&copy; 2021</span>
      </div>

      <Link href='/'>
        <a className={styles.footerLink}>
          <span>About</span>
        </a>
      </Link>
    </div>
  );
};
