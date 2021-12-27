import styles from './CardGroup.module.scss';

interface CardGroupProps {
  children: React.ReactNode;
}

export const CardGroup = ({ children }: CardGroupProps) => {
  return <div className={styles.container}>{children}</div>;
};
