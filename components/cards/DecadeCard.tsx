import { ImageDetails } from '@/models/common';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { easing, fadeInUp, staggerQuick } from '@/animations/animations';

import styles from './DecadeCard.module.scss';

export interface DecadeCardProps {
  year: string;
  description: string;
  image: ImageDetails;
}

const DecadeCard = ({ year, description, image }: DecadeCardProps) => {
  const { url, alternativeText } = image.data.attributes;

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
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easing }}
        viewport={{ once: true }}
        className={styles.imgWrapper}
      >
        <Image src={url} alt={alternativeText} width={500} height={500} />
      </motion.div>
    </motion.div>
  );
};
export default DecadeCard;
