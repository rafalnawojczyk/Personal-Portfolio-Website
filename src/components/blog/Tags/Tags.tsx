import styles from './Tags.module.scss';

export const Tags = ({ content, date }: { content: string[]; date: string }) => {
    return (
        <div className={styles.tagContainer}>
            {content.map(el => (
                <div className={styles.tag}>{el}</div>
            ))}
            <span className={styles.date}>{date}</span>
        </div>
    );
};
