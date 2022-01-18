import { Layout } from '@components/layout';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './index.module.scss';

import artworksIcon from '@/public/images/Artworks-icon.svg';
import historyIcon from '@/public/images/History-icon.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/animations/animations';
import { Metadata } from '@components/metadata';

const Home: NextPage = () => {
  return (
    <>
      <Metadata title='Record - Home' />
      <motion.div
        initial='initial'
        animate='animate'
        exit={{ opacity: 0 }}
        variants={stagger}
        className={styles.container}
      >
        <Link href='/artworks'>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={styles.icon}
          >
            <Image
              src={artworksIcon}
              alt='artworks icon'
              width={300}
              height={300}
              priority
            />
          </motion.a>
        </Link>
        <Link href='/history'>
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={styles.icon}
          >
            <Image
              src={historyIcon}
              alt='history icon'
              width={300}
              height={300}
              priority
            />
          </motion.a>
        </Link>
      </motion.div>
    </>
  );
};

export default Home;
