import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps } from 'next';
import { Decade, PageHero } from '@/models/common';
import { Layout } from '@components/layout';
import { Hero } from '@components/hero';

interface HistoryProps {
  decades: Decade;
  hero: PageHero;
}

const History = ({ decades, hero }: HistoryProps) => {
  console.log(decades.data);

  const { title, content } = hero.data.attributes.pageHero;

  const elDecades = decades.data.map((d) => (
    <div key={d.id}>
      <h3>{d.attributes.year}</h3>
      <p>{d.attributes.description}</p>
    </div>
  ));

  return (
    <Layout title='History'>
      <Hero heading={title} content={content} />
      {elDecades}
    </Layout>
  );
};

export default History;

export const getServerSideProps: GetServerSideProps = async () => {
  const [decades, hero] = await Promise.all([
    fetchApi('/decades'),
    fetchApi('/history?populate=*'),
  ]);

  return {
    props: {
      decades,
      hero,
    },
  };
};
