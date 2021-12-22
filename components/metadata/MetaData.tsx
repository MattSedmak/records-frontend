import Head from 'next/head';

export interface Metadataprops {
  title: string;
}

export const Metadata = ({ title }: Metadataprops) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
