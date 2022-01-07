import Link from 'next/link';
import classNames from 'classnames';

import styles from './NavMenu.module.scss';
import { motion } from 'framer-motion';
import { easing } from '@/animations/animations';

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
        <Link href={`${navLink.path}`}>
          <a className={styles.menuLink}>
            <motion.div
              initial={{ x: -50 }}
              whileHover={{
                x: 10,
              }}
              transition={{ duration: 0.4, ease: easing }}
              className={styles.titleLink}
            >
              <span className={styles.arrow}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 101 57'>
                  <path
                    d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                    fill='#1F2432'
                    fillRule='evenodd'
                  ></path>
                </svg>
              </span>
              {navLink.name}
            </motion.div>
          </a>
        </Link>
      ))}
    </nav>
  );
};
