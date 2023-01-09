import styles from "./HomepageTitle.module.scss";

type HomepageTitleProps = {
    title: string;
    subtitle: string;
    id: string;
};

const HomepageTitle = ({ title, subtitle, id }: HomepageTitleProps) => {
    return (
        <h2 id={id} className={styles.title}>
            <span className={styles.title__number}>{subtitle}</span> {title}
        </h2>
    );
};

export default HomepageTitle;
