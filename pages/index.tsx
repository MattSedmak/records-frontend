import { Layout } from '@components/layout';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from './index.module.scss';

import artworksIcon from '@/public/images/Artworks-icon.svg';
import historyIcon from '@/public/images/History-icon.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Layout title='Records'>
      <div className={styles.container}>
        <Link href='/artworks'>
          <a>
            <Image src={artworksIcon} width={300} height={300} priority />
          </a>
        </Link>
        <Link href='/history'>
          <a>
            <Image src={historyIcon} width={300} height={300} priority />
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
