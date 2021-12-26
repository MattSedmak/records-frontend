import { Listbox } from '@headlessui/react';

import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';

import styles from './Artworks.module.scss';
import { Filter } from '@components/filter';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Album, Artist, Decade } from '@/models/common';
import { useQuery, useQueryClient } from 'react-query';

const { API_URL } = process.env;

const getAlbums = async (key: any) => {
  console.log(key.queryKey[1].artist);

  const artistId = key.queryKey[1].artist;

  if (artistId) {
    const res = await fetch(
      `https://records-backend-deploy.herokuapp.com/api/albums?filters[Artist][$eq]=${artistId}`
    );
    return res.json();
  }

  const res = await fetch(`https://records-backend-deploy.herokuapp.com/api/albums`);
  return res.json();
};

interface ArtworksProps {
  albums: Album;
  artists: Artist;
  decades: Decade;
}

export const Artworks = ({ albums, artists, decades }: ArtworksProps) => {
  const queryClient = useQueryClient();
  const [artistId, setArtistId] = useState(null);
  const [decadeId, setDecadeId] = useState(null);
  const { data, status } = useQuery(['albums', { artist: artistId }], getAlbums, {
    initialData: albums,
  });

  console.log(
    'data: ',
    data.data.map((a: any) => {
      return a.attributes.Title;
    })
  );

  return (
    <Layout title='Artworks'>
      <Hero heading='Artworks' />
      <Filter />

      <div className={styles.filterWrapper}>
        <Listbox as='div' value={artistId} onChange={setArtistId}>
          <Listbox.Button className={styles.filterBtn}>Artist/Band</Listbox.Button>
          <Listbox.Options>
            {artists.data.map((artist) => (
              <Listbox.Option key={artist.id} value={artist.attributes.Name}>
                {artist.attributes.Name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        {/* <Listbox as='div' value={decade} onChange={setDecade}>
          <Listbox.Button className={styles.filterBtn}>Decade</Listbox.Button>
          <Listbox.Options>
            {decades.map((decade) => (
              <Listbox.Option key={decade.id} value={decade.id}>
                {decade.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox> */}
      </div>

      <div>
        {status === 'loading' && <div> Loading...</div>}

        {status === 'success' &&
          data.data.map((a: any) => <div>{a.attributes.Title}</div>)}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { API_URL } = process.env;

  const resAlbums = await fetch(`${API_URL}/albums?populate=Image`);
  const albumsData: Album = await resAlbums.json();

  const resArtists = await fetch(`${API_URL}/artists`);
  const artistsData: Artist = await resArtists.json();

  const resDecades = await fetch(`${API_URL}/decades`);
  const decadesData: Decade = await resDecades.json();

  return {
    props: {
      albums: albumsData,
      artists: artistsData,
      decades: decadesData,
    },
  };
};

export default Artworks;
