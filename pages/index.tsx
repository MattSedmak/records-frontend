import { Layout } from '@components/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.scss';

import squareLogo from '@/public/images/Square-logo-dark.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout title='Records'>
      <Link href='/artworks'>
        <a className={styles.logoWrapper}>
          <Image src={squareLogo} width={600} height={600} />
        </a>
      </Link>
    </Layout>
  );
};

export default Home;
