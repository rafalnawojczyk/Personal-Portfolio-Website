import { ReactNode } from 'react';
import styles from './Quote.module.scss';

type QuoteProps = {
    content: ReactNode;
};

export const Quote = ({ content }: QuoteProps) => {
    return (
        <div className={styles.quoteBox}>
            <div className={styles.content}>{content}</div>
        </div>
    );
};
