import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';
import { useState, useRef, RefObject, useEffect } from 'react';
import { NavToggle } from './NavToggle';
import { NavMenu } from './NavMenu';
import { useOnClickOutside } from '@hooks/common';

import RecordLogoRnd from '@/public/images/Logo-round.svg';
import { useRouter } from 'next/router';

export const Header = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);
  const node = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(node, () => setIsMenuopen(false));

  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuopen(!isMenuOpen);
    }
  }, [router.asPath]);

  return (
    <header className={styles.header}>
      <Link href='/' scroll={false}>
        <a>
          <Image className={styles.logo} src={RecordLogoRnd} alt='Site Logo' />
        </a>
      </Link>
      <div ref={node}>
        <NavToggle
          open={isMenuOpen}
          onClick={() => setIsMenuopen((prev) => !prev)}
        />
        <NavMenu open={isMenuOpen} />
      </div>
    </header>
  );
};
