import { Hero } from '@components/hero';
import { Layout } from '@components/layout';
import { NextPage } from 'next';

const About = () => {
  return (
    <Layout title='About us'>
      <Hero heading='About us' />
    </Layout>
  );
};

export default About;
