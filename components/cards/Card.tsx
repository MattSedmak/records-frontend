import { ImageDetails } from '@/models/common';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Card.module.scss';

import holderImg from '../../public/images/Square-logo-dark.svg';

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
    <Link as={`/artworks/${id}`} href='/artworks/[id]'>
      <a className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image
            src={url}
            alt={alternativeText}
            width={1000}
            height={1000}
            loading='lazy'
          />
        </div>
        <div className={styles.details}>
          <h4 className={styles.artist}>{Artist}</h4>
          <em className={styles.title}>{Title}</em>
          <span className={styles.recordLabel}>
            {RecordLabel}, <span>{ReleaseYear}</span>
          </span>
          <span>Design: {Design}</span>
          <span> {Media} </span>
        </div>
      </a>
    </Link>
  );
};
