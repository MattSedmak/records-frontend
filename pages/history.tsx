import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps } from 'next';
import { Decade, PageHero } from '@/models/common';
import { Layout } from '@components/layout';
import { Hero } from '@components/hero';
import DecadeCard from '@components/cards/DecadeCard';
import styles from './History.module.scss';

interface HistoryProps {
  decades: Decade;
  hero: PageHero;
}

const History = ({ decades, hero }: HistoryProps) => {
  const { title, content } = hero.data.attributes.pageHero;

  const elDecades = decades.data.map((d: any) => (
    <DecadeCard key={d.id} {...d.attributes} />
  ));

  return (
    <Layout title={`Record - ${title}`}>
      <Hero heading={title} content={content} />
      <div className={styles.container}>{elDecades}</div>
    </Layout>
  );
};

export default History;

export const getServerSideProps: GetServerSideProps = async () => {
  const [decades, hero] = await Promise.all([
    fetchApi('/decades?sort[0]=year%3Aasc'),
    fetchApi('/history?populate=*'),
  ]);

  return {
    props: {
      decades,
      hero,
    },
  };
};
