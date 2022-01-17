import { Album } from '@/models/common';
import { BackButton } from '@components/backButton';
import { Layout } from '@components/layout';
import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import styles from './Artwork.module.scss';
import { useResponsiveLG } from '@hooks/common';
import { motion } from 'framer-motion';
import { fadeInUp, staggerQuick } from '@/animations/animations';

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
      <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
        <div className={styles.container}>
          <div className={styles.information}>
            <motion.div variants={staggerQuick} className={styles.textWrapper}>
              <motion.div variants={fadeInUp}>
                {isMobile && <BackButton href='artworks' title='artworks' />}
              </motion.div>
              <motion.h3 variants={fadeInUp} className={styles.artist}>
                {Artist}
              </motion.h3>
              <motion.p variants={fadeInUp} className={styles.title}>
                {Title}
              </motion.p>
              <motion.p variants={fadeInUp} className={styles.record}>
                {RecordLabel}, <span>{ReleaseYear}</span>
              </motion.p>
              <motion.p variants={fadeInUp}>Design: {Design}</motion.p>
              <motion.p variants={fadeInUp}>{Media}</motion.p>
              <motion.div variants={fadeInUp}>
                <ReactMarkdown
                  className={styles.description}
                  children={Description}
                />
              </motion.div>
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className={styles.imgWrapper}>
            <Image
              src={url}
              alt={alternativeText}
              width={600}
              height={600}
              priority
            />
          </motion.div>

          {!isMobile && <BackButton href='artworks' title='artworks' />}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Artwork;

export const getServerSideProps: GetServerSideProps<ArtWorkProps> = async ({
  params,
}) => {
  const album = await fetchApi(`/api/albums/${params?.id}?populate=AlbumImage`);

  if (!album) {
    return { notFound: true };
  }

  return {
    props: {
      album,
    },
  };
};
