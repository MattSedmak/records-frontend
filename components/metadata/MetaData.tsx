import Head from 'next/head';

export interface Metadataprops {
  title: string;
}

export const Metadata = ({ title }: Metadataprops) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel='preload'
        href='/public/fonts/ArticoExtraCondBold.woff2'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/public/fonts/ArticoLight.woff2'
        as='font'
        crossOrigin=''
      />
      <link
        rel='preload'
        href='/public/fonts/ArticoCondensedLight.woff2'
        as='font'
        crossOrigin=''
      />
    </Head>
  );
};
