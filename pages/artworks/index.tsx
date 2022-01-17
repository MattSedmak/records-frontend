import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';
import styles from './Artworks.module.scss';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Album, Artist, Decade, PageHero } from '@/models/common';
import { useQuery } from 'react-query';
import { CardGroup } from '@components/cards';
import { fetchApi } from '@hooks/fetchApi';
import { motion } from 'framer-motion';
import Filter from '@components/filter/Filter';

const getAlbums = async (artistKey: string | null, decadeKey: string | null) => {
  const imageQuery =
    'populate[AlbumImage][fields][0]=name&populate[AlbumImage][fields][1]=url';

  if (artistKey && decadeKey) {
    const res = await fetchApi(
      `/albums?filters[Artist][$eq]=${artistKey}&filters[ReleaseDecade][$eq]=${decadeKey}&${imageQuery}`
    );
    return res;
  }

  if (artistKey) {
    const res = await fetchApi(
      `/albums?filters[Artist][$eq]=${artistKey}&${imageQuery}`
    );
    return res;
  }

  if (decadeKey) {
    const res = await fetchApi(
      `/albums?filters[ReleaseDecade][$eq]=${decadeKey}&${imageQuery}`
    );
    return res;
  }

  const albums = await fetchApi('/albums?populate=AlbumImage');
  return albums;
};

interface ArtworksProps {
  albums: Album[];
  artists: Artist;
  decades: Decade;
  hero: PageHero;
}

export const Artworks = ({ albums, artists, decades, hero }: ArtworksProps) => {
  const [artistKey, setArtistKey] = useState<string | null>(null);
  const [decadeKey, setDecadeKey] = useState<string | null>(null);
  const { title, content } = hero.data.attributes.pageHero;
  const { data, status } = useQuery(
    ['albums', artistKey, decadeKey],
    () => getAlbums(artistKey, decadeKey),
    {
      initialData: albums,
    }
  );

  const changeArtistHandler = (value: string) => {
    setArtistKey(value);
  };

  const changeDecadeHandler = (value: string) => {
    setDecadeKey(value);
  };

  const clearFiltersHandler = () => {
    setArtistKey(null);
    setDecadeKey(null);
  };

  return (
    <Layout title={`Record - ${title}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero heading={title} content={content} />
        <div className={styles.results}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={styles.filterWrapper}
          >
            <h3 className={styles.heading}>Filter results</h3>
            <Filter
              artists={artists}
              decades={decades}
              artistKey={artistKey}
              decadeKey={decadeKey}
              onReset={clearFiltersHandler}
              onArtistChange={changeArtistHandler}
              onDecadeChange={changeDecadeHandler}
            />
          </motion.div>
          <CardGroup status={status} data={data} />
        </div>
      </motion.div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [albums, artists, decades, hero] = await Promise.all([
    fetchApi('/api/albums?populate=AlbumImage'),
    fetchApi('/api/artists?sort[0]=Name%3Aasc'),
    fetchApi('/api/decades?sort[0]=year%3Aasc'),
    fetchApi('/api/artworks-page?populate=*'),
  ]);

  return {
    props: {
      albums,
      artists,
      decades,
      hero,
    },
  };
};

export default Artworks;
