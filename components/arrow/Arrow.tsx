import styles from './Arrow.module.scss';

const Arrrow = () => {
  return (
    <span className={styles.arrow}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 101 57'>
        <path
          d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
          fill='#1F2432'
          fillRule='evenodd'
        ></path>
      </svg>
    </span>
  );
};
export default Arrrow;
