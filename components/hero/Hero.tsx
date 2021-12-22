import styles from './Hero.module.scss';

export interface SectionProps {
  heading: string;
}

export const Hero = ({ heading }: SectionProps) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque
        elit eget gravida cum sociis natoque. Commodo nulla facilisi nullam vehicula
        ipsum a arcu cursus vitae. Morbi leo urna molestie at. Est placerat in e.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
};
