import { ImageDetails } from '@/models/common';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import styles from './DecadeCard.module.scss';

export interface DecadeCardProps {
  year: string;
  description: string;
  image: ImageDetails;
}

const DecadeCard = ({ year, description, image }: DecadeCardProps) => {
  const { url, alternativeText } = image.data.attributes;

  return (
    <div className={styles.container}>
      <div className={styles.textWrapper}>
        <h3 className={styles.heading}>{year}</h3>
        <ReactMarkdown className={styles.content} children={description} />
      </div>
      <div className={styles.imgWrapper}>
        <Image src={url} alt={alternativeText} width={500} height={500} />
      </div>
    </div>
  );
};
export default DecadeCard;
