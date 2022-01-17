import Link from 'next/link';
import classNames from 'classnames';

import styles from './NavMenu.module.scss';
import { motion } from 'framer-motion';
import { easing } from '@/animations/animations';
import Arrow from '@components/arrow/Arrow';

const navLinks = [
  { name: 'Artworks', path: '/artworks' },
  { name: 'History', path: '/history' },
  { name: 'About', path: '/about' },
];

interface NavMenuProps {
  open: Boolean;
}

export const NavMenu = ({ open }: NavMenuProps) => {
  return (
    <nav className={classNames(styles.menu, { [styles.open]: open })}>
      {navLinks.map((navLink) => (
        <Link key={navLink.name} href={`${navLink.path}`}>
          <a className={styles.menuLink}>
            <motion.div
              initial={{ x: -50 }}
              whileHover={{
                x: 10,
              }}
              transition={{ duration: 0.4, ease: easing }}
              className={styles.titleLink}
            >
              <Arrow />
              {navLink.name}
            </motion.div>
          </a>
        </Link>
      ))}
    </nav>
  );
};
