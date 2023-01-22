import Image from "next/image";
import styles from "./PersonalPhoto.module.scss";
import Photo from "../../../public/personal-photo.jpg";
import PhotoBox from "../../PhotoBox";

type PersonalPhotoProps = {
    className: string;
};

const PersonalPhoto = ({ className }: PersonalPhotoProps) => {
    return (
        <PhotoBox className={className}>
            <Image
                className={styles.photo}
                alt={"Photo contains a portrait of website creator - Rafał Nawojczyk"}
                src={Photo}
                style={{ objectFit: "cover" }}
            />
        </PhotoBox>
    );
};

export default PersonalPhoto;
