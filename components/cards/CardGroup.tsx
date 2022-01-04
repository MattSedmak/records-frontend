import { Card } from '@components/cards/Card';
import styles from './CardGroup.module.scss';

interface CardGroupProps {
  status: string;
  data: any;
}

export const CardGroup = ({ status, data }: CardGroupProps) => {
  const elCards = data.data.map((album: any) => (
    <Card key={album.id} {...album.attributes} id={album.id} />
  ));

  console.log(data);
  return (
    <div className={styles.container}>
      {status === 'loading' && <div> Loading...</div>}

      {status === 'error' && <div>Something went wrong</div>}

      {status === 'success' && data.data.length == 0 && (
        <div>No matching results</div>
      )}

      {status === 'success' && elCards}
    </div>
  );
};
