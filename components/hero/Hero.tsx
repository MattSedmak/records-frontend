import ReactMarkdown from 'react-markdown';
import styles from './Hero.module.scss';
import { fadeInUp, staggerQuick, easing } from '@/animations/animations';
import { motion } from 'framer-motion';

export interface SectionProps {
  heading: string;
  content: string;
}

export const Hero = ({ heading, content }: SectionProps) => {
  return (
    <motion.section
      initial='initial'
      animate='animate'
      exit={{ y: -60, opacity: 0 }}
      transition={{ delay: 0.1, ease: easing }}
      variants={staggerQuick}
      className={styles.container}
    >
      <motion.h1 variants={fadeInUp} className={styles.heading}>
        {heading}
      </motion.h1>
      <motion.div variants={fadeInUp}>
        <ReactMarkdown className={styles.description} children={content} />
      </motion.div>
    </motion.section>
  );
};
