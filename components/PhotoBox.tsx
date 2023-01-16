import styles from "./PhotoBox.module.scss";

type PhotoBoxProps = {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
};

const PhotoBox = ({ children, className }: PhotoBoxProps) => {
    return (
        <div className={`${styles.photo__box} ${className}`}>
            {children}
            <div className={styles.photo__overlay}></div>
        </div>
    );
};

export default PhotoBox;
