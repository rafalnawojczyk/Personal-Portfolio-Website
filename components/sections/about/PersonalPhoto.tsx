import Image from "next/image";
import styles from "./PersonalPhoto.module.scss";
import Photo from "../../../public/personal-photo.jpg";
import PhotoBox from "../../PhotoBox";

const PersonalPhoto = () => {
    return (
        <div className={styles.wrapper}>
            <PhotoBox>
                <Image
                    className={styles.photo}
                    height={400}
                    width={400}
                    alt={"Photo contains a portrait of website creator - Rafał Nawojczyk"}
                    src={Photo}
                />
            </PhotoBox>
        </div>
    );
};

export default PersonalPhoto;
