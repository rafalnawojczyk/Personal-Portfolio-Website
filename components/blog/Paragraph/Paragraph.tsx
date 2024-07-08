import { ReactNode } from 'react';
import styles from './Paragraph.module.scss';

type ParagraphProps = {
    content: ReactNode;
};

export const Paragraph = ({ content }: ParagraphProps) => {
    return <p className={styles.paragraph}>{content}</p>;
};
