import styles from './main-card.module.scss';
import cx from 'classnames';

export interface MainCardProps {
    className?: string;
    temp: number;
    img: string | undefined;
}

export const MainCard = ({ className, temp, img }: MainCardProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <img
                src={img}
                alt=""
                className={styles.img1}
            />
            <h2 className={styles['main-heading']}>Today</h2>
            <p className={styles['main-temp']}>{temp}°C</p>
        </div>
    );
};
