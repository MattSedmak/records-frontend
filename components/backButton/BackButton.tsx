import { useRouter } from 'next/router';
import Image from 'next/image';
import arrowIcon from 'public/images/Arrow-icon.svg';

import styles from './BackButton.module.scss';

interface BackButtonProps {
  href: string;
  title: string;
}

export const BackButton = ({ href, title }: BackButtonProps) => {
  const router = useRouter();
  return (
    <button className={styles.button} onClick={() => router.push(`/${href}`)}>
      <Image src={arrowIcon} alt='icon' priority />
      <span className={styles.text}>Back to {title}</span>
    </button>
  );
};
export default BackButton;
