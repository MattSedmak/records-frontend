import { Listbox } from '@headlessui/react';
import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';
import styles from './Artworks.module.scss';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Album, Artist, Decade, PageHero } from '@/models/common';
import { useQuery } from 'react-query';
import { CardGroup } from '@components/cards';
import { ActiveIcon } from '@components/activeIcon';
import { fetchApi } from '@hooks/fetchApi';
import { motion } from 'framer-motion';

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
  const [artistKey, setArtistKey] = useState(null);
  const [decadeKey, setDecadeKey] = useState(null);
  const { data, status } = useQuery(
    ['albums', artistKey, decadeKey],
    () => getAlbums(artistKey, decadeKey),
    {
      initialData: albums,
    }
  );

  const { title, content } = hero.data.attributes.pageHero;

  const clearFiltersHandler = () => {
    setArtistKey(null);
    setDecadeKey(null);
  };

  return (
    <Layout title='Artworks'>
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

            <Listbox as='div' value={artistKey} onChange={setArtistKey}>
              {({ open }) => (
                <>
                  <Listbox.Button className={styles.filterBtn}>
                    Artist/Band
                  </Listbox.Button>
                  {open && (
                    <Listbox.Options
                      as={motion.ul}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      static
                    >
                      {artists.data.map((artist) => (
                        <Listbox.Option
                          className={styles.filterOption}
                          key={artist.id}
                          value={artist.attributes.Name}
                        >
                          {({ selected }) => (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                              {artist.attributes.Name}
                              {selected && <ActiveIcon />}
                            </span>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  )}
                </>
              )}
            </Listbox>
            <Listbox as='div' value={decadeKey} onChange={setDecadeKey}>
              {({ open }) => (
                <>
                  <Listbox.Button className={styles.filterBtn}>
                    Decade
                  </Listbox.Button>
                  {open && (
                    <Listbox.Options
                      as={motion.ul}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      static
                    >
                      {decades.data.map((decade) => (
                        <Listbox.Option
                          className={styles.filterOption}
                          key={decade.id}
                          value={decade.attributes.year}
                        >
                          {({ selected }) => (
                            <span style={{ display: 'flex', alignItems: 'center' }}>
                              {decade.attributes.year}
                              {selected && <ActiveIcon />}
                            </span>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  )}
                </>
              )}
            </Listbox>
            <button className={styles.filterBtn} onClick={clearFiltersHandler}>
              Reset
            </button>
          </motion.div>

          <CardGroup status={status} data={data} />
        </div>
      </motion.div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const [albums, artists, decades, hero] = await Promise.all([
    fetchApi('/albums?populate=AlbumImage'),
    fetchApi('/artists'),
    fetchApi('/decades'),
    fetchApi('/artworks-page?populate=*'),
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
