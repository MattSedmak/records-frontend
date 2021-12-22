import Link from 'next/link';
import classNames from 'classnames';

import styles from './NavMenu.module.scss';

interface NavMenuProps {
  open: Boolean;
}

export const NavMenu = ({ open }: NavMenuProps) => {
  return (
    <nav className={classNames(styles.menu, { [styles.open]: open })}>
      <Link href='/artworks'>
        <a className={styles.menuLink}>Artworks</a>
      </Link>
      <Link href='/'>
        <a className={styles.menuLink}>History</a>
      </Link>
      <Link href='/'>
        <a className={styles.menuLink}>About</a>
      </Link>
      <Link href='/'>
        <a className={styles.menuLink}> Sign in</a>
      </Link>
    </nav>
  );
};
