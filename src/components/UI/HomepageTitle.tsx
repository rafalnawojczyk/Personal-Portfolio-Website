import styles from "./HomepageTitle.module.scss";

type HomepageTitleProps = {
    title: string;
    subtitle: string;
    id: string;
    className?: string;
};

const HomepageTitle = ({ title, subtitle, id, className }: HomepageTitleProps) => {
    return (
        <h2 id={id} className={`${styles.title} ${className}`}>
            <span className={styles.title__number}>{subtitle}</span> {title}
        </h2>
    );
};

export default HomepageTitle;
