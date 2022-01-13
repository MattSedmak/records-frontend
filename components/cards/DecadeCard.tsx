import { ImageDetails } from '@/models/common';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { easing, fadeInUp, staggerQuick } from '@/animations/animations';

import styles from './DecadeCard.module.scss';

export interface DecadeCardProps {
  year: string;
  description: string;
}

const DecadeCard = ({ year, description }: DecadeCardProps) => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit={{ y: -60, opacity: 0 }}
      transition={{ delay: 0.1, ease: easing }}
      className={styles.container}
    >
      <motion.div
        variants={staggerQuick}
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        viewport={{ once: true }}
        className={styles.textWrapper}
      >
        <motion.h3 variants={fadeInUp} className={styles.heading}>
          {year}
        </motion.h3>
        <motion.div variants={fadeInUp}>
          <ReactMarkdown className={styles.content} children={description} />
        </motion.div>
      </motion.div>
      <div className={styles.imgWrapper}></div>
    </motion.div>
  );
};
export default DecadeCard;
