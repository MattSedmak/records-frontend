import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Metadata } from '@components/metadata';
import styles from './Layout.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Metadata title={title} />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
