import { Artist, Decade } from '@/models/common';
import { ActiveIcon } from '@components/activeIcon';
import { Listbox } from '@headlessui/react';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Filter.module.scss';

interface FilterProps {
  artists: Artist;
  decades: Decade;
  artistKey: string | null;
  decadeKey: string | null;
  onReset: () => void;
  onArtistChange: (value: string) => void;
  onDecadeChange: (value: string) => void;
}

const Filter = ({
  artists,
  decades,
  artistKey,
  decadeKey,
  onReset,
  onArtistChange,
  onDecadeChange,
}: FilterProps) => {
  return (
    <>
      <Listbox as='div' value={artistKey} onChange={onArtistChange}>
        {({ open }) => (
          <>
            <Listbox.Button className={styles.filterBtn}>Artist/Band</Listbox.Button>
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
                    {({ active, selected }) => (
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        {artist.attributes.Name}
                        {active && <ActiveIcon />}
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
      <Listbox as='div' value={decadeKey} onChange={onDecadeChange}>
        {({ open }) => (
          <>
            <Listbox.Button className={styles.filterBtn}>Decade</Listbox.Button>
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
                    {({ active, selected }) => (
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        {decade.attributes.year}
                        {active && <ActiveIcon />}
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
      <button className={styles.filterBtn} onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default Filter;
