import { PageHero } from '@/models/common';
import { Hero } from '@components/hero';
import { Layout } from '@components/layout';
import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps, NextPage } from 'next';

interface AboutProps {
  hero: PageHero;
}

const About = ({ hero }: AboutProps) => {
  const { title, content } = hero.data.attributes.pageHero;

  return (
    <Layout title='About us'>
      <Hero heading={title} content={content} />
    </Layout>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async () => {
  const hero = await fetchApi('/about-us?populate=*');

  console.log(hero);

  return {
    props: {
      hero,
    },
  };
};
