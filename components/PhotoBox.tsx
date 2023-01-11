import styles from "./PhotoBox.module.scss";

type PhotoBoxProps = {
    children: React.ReactNode | React.ReactNode[];
};

const PhotoBox = ({ children }: PhotoBoxProps) => {
    return (
        <div className={styles.photo__box}>
            {children}
            <div className={styles.photo__overlay}></div>
        </div>
    );
};

export default PhotoBox;
