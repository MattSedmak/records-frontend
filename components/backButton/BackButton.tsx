import { useRouter } from 'next/router';
import Image from 'next/image';
import arrowIcon from 'public/images/Arrow-icon.svg';

import styles from './BackButton.module.scss';

export const BackButton = () => {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.push('/artworks')}>
      <Image src={arrowIcon} alt='icon' priority />
      <span className={styles.text}>Back to artworks</span>
    </button>
  );
};
export default BackButton;
