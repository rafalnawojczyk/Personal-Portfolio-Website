import { ReactNode } from 'react';
import styles from './Subheading.module.scss';

type SubheadingProps = {
    content: ReactNode;
};

export const Subheading = ({ content }: SubheadingProps) => {
    return <p className={styles.subheading}>{content}</p>;
};
