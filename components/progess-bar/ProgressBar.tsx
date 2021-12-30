import { useNProgress } from '@tanem/react-nprogress';

import styles from './ProgressBar.module.scss';

export interface ProgressProps {
  isAnimating: boolean;
}

export const ProgressBar = ({ isAnimating }: ProgressProps) => {
  const { animationDuration, isFinished, progress } = useNProgress({ isAnimating });

  return (
    <div
      className={styles.container}
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className={styles.progressBar}
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      ></div>
    </div>
  );
};
