import { ReactNode } from 'react';
import styles from './UnorderedList.module.scss';

type UnorderedListProps = {
    content: ReactNode;
};

export const UnorderedList = ({ content }: UnorderedListProps) => {
    return <ul className={styles.unorderedList}>{content}</ul>;
};
