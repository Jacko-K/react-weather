import styles from './footer.module.scss';
import cx from 'classnames';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={cx(styles.root, className, styles['footer-text'])}>
            <h2 className={styles['footer-text']}>JK</h2>
        </div>
    );
};
