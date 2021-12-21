import { SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './NavToggle.module.scss';

interface NavtoggleProps {
  open: boolean;
  onClick?: (e: SyntheticEvent) => void;
}

export const NavToggle = ({ open, onClick }: NavtoggleProps) => {
  return (
    <div
      className={classNames(styles.navToggle, { [styles.open]: open })}
      onClick={onClick}
    >
      <span>{open ? 'close' : 'menu'}</span>
      <div className={styles.icon}></div>
    </div>
  );
};
