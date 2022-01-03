import ReactMarkdown from 'react-markdown';
import styles from './Hero.module.scss';

export interface SectionProps {
  heading: string;
  content: string;
}

export const Hero = ({ heading, content }: SectionProps) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      <ReactMarkdown className={styles.description} children={content} />
    </section>
  );
};
