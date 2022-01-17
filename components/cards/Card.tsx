import { ImageDetails } from '@/models/common';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';
import { motion } from 'framer-motion';
import { easing } from '@/animations/animations';

export interface CardProps {
  Title: string;
  Artist: string;
  RecordLabel: string;
  ReleaseYear: string;
  Media: string;
  Design: string;
  AlbumImage: ImageDetails;
  id: number;
}

export const Card = ({
  Title,
  Artist,
  RecordLabel,
  ReleaseYear,
  Media,
  Design,
  AlbumImage,
  id,
}: CardProps) => {
  const { url, alternativeText } = AlbumImage.data.attributes;

  return (
    <Link href='/artworks/[id]' as={`/artworks/${id}`} scroll={false}>
      <motion.a
        exit={{ y: -60, opacity: 0 }}
        transition={{ ease: easing }}
        className={styles.card}
      >
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easing }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className={styles.imgWrapper}
        >
          <Image src={url} alt={alternativeText} width={1000} height={1000} />
        </motion.div>
        <div className={styles.details}>
          <h4 className={styles.artist}>{Artist}</h4>
          <em className={styles.title}>{Title}</em>
          <span className={styles.recordLabel}>
            {RecordLabel}, <span>{ReleaseYear}</span>
          </span>
          <span>Design: {Design}</span>
          <span> {Media} </span>
        </div>
      </motion.a>
    </Link>
  );
};
