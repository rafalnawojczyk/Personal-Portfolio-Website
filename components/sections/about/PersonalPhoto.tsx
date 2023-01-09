import Image from "next/image";
import styles from "./PersonalPhoto.module.scss";
import Photo from "../../../public/personal-photo.jpg";

const PersonalPhoto = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.photo__box}>
                <Image
                    height={400}
                    width={400}
                    alt={"Photo contains a portrait of website creator - Rafał Nawojczyk"}
                    src={Photo}
                />
                <div className={styles.photo__overlay}></div>
            </div>
        </div>
    );
};

export default PersonalPhoto;
