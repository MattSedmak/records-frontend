import { Listbox, Transition } from '@headlessui/react';

import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';

import styles from './Artworks.module.scss';
import { Filter } from '@components/filter';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Album, Artist, Decade, PageHero } from '@/models/common';
import { useQuery, useQueryClient } from 'react-query';
import { Card, CardGroup, CardProps } from '@components/cards';
import { ActiveIcon } from '@components/activeIcon';
import { fetchApi } from '@hooks/fetchApi';

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
      <Hero heading={title} content={content} />

      <div className={styles.results}>
        <div className={styles.filterWrapper}>
          <h3 className={styles.heading}>Filter results</h3>

          <Listbox as='div' value={artistKey} onChange={setArtistKey}>
            <Listbox.Button className={styles.filterBtn}>Artist/Band</Listbox.Button>
            <Listbox.Options>
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
          </Listbox>
          <Listbox as='div' value={decadeKey} onChange={setDecadeKey}>
            <Listbox.Button className={styles.filterBtn}>Decade</Listbox.Button>
            <Listbox.Options>
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
          </Listbox>
          <button className={styles.filterBtn} onClick={clearFiltersHandler}>
            Reset
          </button>
        </div>

        <CardGroup>
          {status === 'loading' && <div> Loading...</div>}

          {status === 'error' && <div>Something went wrong</div>}

          {status === 'success' && data.data.length == 0 && (
            <div>No matching results</div>
          )}

          {status === 'success' &&
            data.data.map((album: any) => (
              <Card key={album.id} {...album.attributes} id={album.id} />
            ))}
        </CardGroup>
      </div>
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
