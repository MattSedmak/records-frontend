import { Listbox } from '@headlessui/react';

import { Layout } from '@components/layout';
import { Hero } from '@components/hero/Hero';

import styles from './Artworks.module.scss';
import { Filter } from '@components/filter';
import { useState } from 'react';

const artists = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
];

const decades = [
  { id: 1, name: '1970s', unavailable: false },
  { id: 2, name: '1980s', unavailable: false },
];

export const Artworks = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [decade, setDecade] = useState(null);

  console.log(decade);

  return (
    <Layout title='Artworks'>
      <Hero heading='Artworks' />
      <Filter />

      <div className={styles.filterWrapper}>
        <Listbox as='div' value={selectedArtist} onChange={setSelectedArtist}>
          <Listbox.Button className={styles.filterBtn}>Artist/Band</Listbox.Button>
          <Listbox.Options>
            {artists.map((artist) => (
              <Listbox.Option key={artist.id} value={artist}>
                {artist.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
        <Listbox as='div' value={decade} onChange={setDecade}>
          <Listbox.Button className={styles.filterBtn}>Decade</Listbox.Button>
          <Listbox.Options>
            {decades.map((decade) => (
              <Listbox.Option key={decade.id} value={decade.id}>
                {decade.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </Layout>
  );
};

export default Artworks;
