import Image from 'next/image';
import Link from 'next/link';
import turnTableImg from 'public/images/bw-turntable.svg';
import styles from './404.module.scss';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}> Oh no! No artworks to see here.</h1>
        <Link href='/artworks'>
          <a>Back to the artworks</a>
        </Link>
      </div>
      <div className={styles.imgWrapper}>
        <Image src={turnTableImg} width={600} height={400} />
      </div>
    </div>
  );
}
