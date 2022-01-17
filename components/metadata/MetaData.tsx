import Head from 'next/head';

export interface Metadataprops {
  title: string;
}

export const Metadata = ({ title }: Metadataprops) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='preload'
        href='/fonts/ArticoExtraCondBold.woff2'
        as='font'
        crossOrigin=''
      />
      <link rel='preload' href='/fonts/ArticoLight.woff2' as='font' crossOrigin='' />
      <link
        rel='preload'
        href='/fonts/ArticoCondensedLight.woff2'
        as='font'
        crossOrigin=''
      />

      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff'></meta>
    </Head>
  );
};
