import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';
import { useState } from 'react';
import { NavToggle } from './NavToggle';
import { NavMenu } from './NavMenu';

import RecordLogoRnd from '@/public/images/Logo-round.svg';

export const Header = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href='/' scroll={false}>
        <a>
          <Image className={styles.logo} src={RecordLogoRnd} alt='Site Logo' />
        </a>
      </Link>
      <NavToggle open={isMenuOpen} onClick={() => setIsMenuopen((prev) => !prev)} />
      <NavMenu open={isMenuOpen} />
    </header>
  );
};
