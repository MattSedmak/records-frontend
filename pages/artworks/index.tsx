import { Listbox } from '@headlessui/react';

import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';

import styles from './Artworks.module.scss';
import { Filter } from '@components/filter';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Album, Artist, Decade } from '@/models/common';
import { useQuery, useQueryClient } from 'react-query';
import { Card, CardGroup, CardProps } from '@components/cards';

const { API_URL } = process.env;

const getAlbums = async (key: any) => {
  // console.log(key.queryKey[2].decade);

  const artistKey = key.queryKey[1].artist;
  const decadeKey = key.queryKey[2].decade;

  const imageQuery =
    'populate[AlbumImage][fields][0]=name&populate[AlbumImage][fields][1]=url';

  if (artistKey) {
    const res = await fetch(
      `https://records-backend-deploy.herokuapp.com/api/albums?filters[Artist][$eq]=${artistKey}&${imageQuery}`
    );
    return res.json();
  }

  if (decadeKey) {
    const res = await fetch(
      `https://records-backend-deploy.herokuapp.com/api/albums?filters[ReleaseDecade][$eq]=${decadeKey}&${imageQuery}`
    );
    return res.json();
  }

  const res = await fetch(
    `https://records-backend-deploy.herokuapp.com/api/albums?populate=AlbumImage
    `
  );
  return res.json();
};

interface ArtworksProps {
  albums: Album;
  artists: Artist;
  decades: Decade;
}

export const Artworks = ({ albums, artists, decades }: ArtworksProps) => {
  const queryClient = useQueryClient();
  const [artistKey, setArtistKey] = useState(null);
  const [decadeKey, setDecadeKey] = useState(null);
  const { data, status } = useQuery(
    ['albums', { artist: artistKey }, { decade: decadeKey }],
    getAlbums,
    {
      initialData: albums,
    }
  );

  // console.log(
  //   data.data.map((a: Album) => {
  //     return a.attributes.AlbumImage.data.attributes.url;
  //   })
  // );

  return (
    <Layout title='Artworks'>
      <Hero heading='Artworks' />
      <Filter />

      <div className={styles.filterWrapper}>
        <Listbox as='div' value={artistKey} onChange={setArtistKey}>
          <Listbox.Button className={styles.filterBtn}>Artist/Band</Listbox.Button>
          <Listbox.Options>
            {artists.data.map((artist) => (
              <Listbox.Option key={artist.id} value={artist.attributes.Name}>
                {artist.attributes.Name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <Listbox as='div' value={decadeKey} onChange={setDecadeKey}>
          <Listbox.Button className={styles.filterBtn}>Decade</Listbox.Button>
          <Listbox.Options>
            {decades.data.map((decade) => (
              <Listbox.Option key={decade.id} value={decade.attributes.year}>
                {decade.attributes.year}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>

      <CardGroup>
        {status === 'loading' && <div> Loading...</div>}

        {status === 'error' && <div>Something went wrong</div>}

        {status === 'success' &&
          data.data.map((album: Album) => (
            <Card key={album.id} {...album.attributes} id={album.id} />
          ))}
      </CardGroup>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { API_URL } = process.env;

  const resAlbums = await fetch(`${API_URL}/albums?populate=AlbumImage`);
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
