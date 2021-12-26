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
      <div className={styles.container}>
        <Link href='/artworks'>
          <a>
            <Image src={squareLogo} width={500} height={500} priority />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
