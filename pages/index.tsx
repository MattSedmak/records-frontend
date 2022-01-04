import { Layout } from '@components/layout';
import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './index.module.scss';

import artworksIcon from '@/public/images/Artworks-icon.svg';
import historyIcon from '@/public/images/History-icon.svg';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '@/animations/animations';

const Home: NextPage = () => {
  return (
    <Layout title='Records'>
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <motion.div variants={stagger} className={styles.container}>
          <Link href='/artworks'>
            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileFocus={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.icon}
            >
              <Image src={artworksIcon} width={300} height={300} priority />
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
              <Image src={historyIcon} width={300} height={300} priority />
            </motion.a>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Home;
