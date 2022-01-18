import { PageHero } from '@/models/common';
import { Hero } from '@components/hero';
import { Layout } from '@components/layout';
import { Metadata } from '@components/metadata';
import { fetchApi } from '@hooks/fetchApi';
import { GetServerSideProps, NextPage } from 'next';

interface AboutProps {
  hero: PageHero;
}

const About = ({ hero }: AboutProps) => {
  const { title, content } = hero.data.attributes.pageHero;

  return (
    <>
      <Metadata title={`Record - ${title}`} />
      <Hero heading={title} content={content} />
    </>
  );
};

export default About;

export const getServerSideProps: GetServerSideProps = async () => {
  const hero = await fetchApi('/about-us?populate=*');

  return {
    props: {
      hero,
    },
  };
};
