import styles from './header.module.scss';
import cx from 'classnames';


export interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <div className={cx(styles.root, className)}>
      <h1 className={styles.header1}>⅋</h1>
      <p className={styles.p1}> Jack&apos;s React Industries </p>
    </div>
  );
};
