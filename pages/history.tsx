import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps } from 'next';
import { Decade, PageHero } from '@/models/common';
import { Layout } from '@components/layout';
import { Hero } from '@components/hero';
import DecadeCard from '@components/cards/DecadeCard';

interface HistoryProps {
  decades: Decade;
  hero: PageHero;
}

const History = ({ decades, hero }: HistoryProps) => {
  // console.log(decades.data);

  const { title, content } = hero.data.attributes.pageHero;

  const elDecades = decades.data.map((d: any) => (
    <DecadeCard key={d.id} {...d.attributes} />
  ));

  return (
    <Layout title='History'>
      <Hero heading={title} content={content} />
      <div style={{ paddingLeft: '173px', marginTop: '100px' }}>{elDecades}</div>
    </Layout>
  );
};

export default History;

export const getServerSideProps: GetServerSideProps = async () => {
  const [decades, hero] = await Promise.all([
    fetchApi('/decades?populate=*'),
    fetchApi('/history?populate=*'),
  ]);

  return {
    props: {
      decades,
      hero,
    },
  };
};
