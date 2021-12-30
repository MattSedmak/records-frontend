import { Album } from '@/models/common';
import { BackButton } from '@components/backButton';
import { Layout } from '@components/layout';
import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

import styles from './Artwork.module.scss';

import dummyImg from 'public/images/Square-logo-dark.svg';
import { useResponsiveLG } from '@hooks/common';

interface ArtWorkProps {
  album: Album;
}

const Artwork = ({ album }: ArtWorkProps) => {
  const {
    Title,
    Artist,
    Description,
    Design,
    Media,
    RecordLabel,
    ReleaseYear,
    AlbumImage: {
      data: {
        attributes: { url, alternativeText },
      },
    },
  } = album.data.attributes;

  const isMobile = useResponsiveLG();

  return (
    <Layout title={Title}>
      <div className={styles.container}>
        <div className={styles.information}>
          {isMobile && <BackButton />}
          <div className={styles.textWrapper}>
            <h3 className={styles.artist}>{Artist}</h3>
            <em className={styles.title}>{Title}</em>
            <p className={styles.record}>
              {RecordLabel}, <span>{ReleaseYear}</span>
            </p>
            <p>Design: {Design}</p>
            <p>{Media}</p>
            <ReactMarkdown className={styles.description} children={Description} />
          </div>
        </div>
        <div className={styles.imgWrapper}>
          <Image src={dummyImg} alt='' width={600} height={600} priority />
        </div>
        {!isMobile && <BackButton />}
      </div>
    </Layout>
  );
};

export default Artwork;

export const getServerSideProps: GetServerSideProps<ArtWorkProps> = async ({
  params,
}) => {
  const album = await fetchApi(`/albums/${params?.id}?populate=AlbumImage`);

  return {
    props: {
      album,
    },
  };
};
