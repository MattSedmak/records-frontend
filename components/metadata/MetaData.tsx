import Head from 'next/head';

export interface Metadataprops {
  title: string;
}

export const Metadata = ({ title }: Metadataprops) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
  );
};
