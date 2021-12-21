import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

import RecordLogo from '@/public/images/Record.svg';
import RecordLogoMobile from '@/public/images/Record-mobile.svg';
import { useState } from 'react';
import { NavToggle } from './NavToggle';
import { useResponsiveSM } from '@hooks/common';
import { NavMenu } from './NavMenu';

export const Header = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);
  const isResponsiveSM = useResponsiveSM();

  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Image
            className={styles.logo}
            src={isResponsiveSM ? RecordLogo : RecordLogoMobile}
            alt='Site Logo'
          />
        </a>
      </Link>
      <NavToggle open={isMenuOpen} onClick={() => setIsMenuopen((prev) => !prev)} />
      <NavMenu open={isMenuOpen} />
    </header>
  );
};
