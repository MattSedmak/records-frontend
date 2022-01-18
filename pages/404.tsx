import { easing } from '@/animations/animations';
import Arrrow from '@components/arrow/Arrow';
import { Metadata } from '@components/metadata';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import turnTableImg from 'public/images/bw-turntable.svg';
import styles from './404.module.scss';

export default function Custom404() {
  return (
    <>
      <Metadata title='Record - Woops!' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.container}
      >
        <div>
          <h1 className={styles.heading}>
            Woops!
            <br /> No artworks here.
          </h1>
          <Link href='/artworks'>
            <a className={styles.link}>
              <motion.div
                initial={{ x: -55 }}
                whileHover={{
                  x: 1,
                }}
                transition={{ duration: 0.4, ease: easing }}
              >
                <Arrrow />
                Back to the artworks
              </motion.div>
            </a>
          </Link>
          <Link href='/'>
            <a className={styles.link}>
              <motion.div
                initial={{ x: -55 }}
                whileHover={{
                  x: 1,
                }}
                transition={{ duration: 0.4, ease: easing }}
              >
                <Arrrow />
                Take me home
              </motion.div>
            </a>
          </Link>
        </div>
        <div className={styles.imgWrapper}>
          <Image src={turnTableImg} alt='record player' width={600} height={400} />
        </div>
      </motion.div>
    </>
  );
}
