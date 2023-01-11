import Image from "next/image";
import FeaturedImage from "../../../public/featured-project.jpg";
import PhotoBox from "../../PhotoBox";
import GitHubLogo from "../../svg/GithubLogo";
import PreviewIcon from "../../svg/PreviewIcon";
import styles from "./FeaturedProject.module.scss";

const FeaturedProject = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.featured__photo}>
                <PhotoBox>
                    <Image
                        height={462}
                        width={750}
                        className={styles.featured__image}
                        alt={"Preview image showing homepage of Twitch Statistics project website"}
                        src={FeaturedImage.src}
                        loading="lazy"
                    />
                </PhotoBox>
            </div>

            <div className={styles.featured__content}>
                <p className={styles.featured__text}>Featured project</p>
                <h3 className={styles.featured__heading}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className={styles.featured__title}
                        href={"https://twitch-statistics.vercel.app/"}
                    >
                        Twitch Statistics
                    </a>
                </h3>
                <div className={styles["featured__description-box"]}>
                    <p className={styles.featured__description}>
                        Advanced full-stack web application, written in Typescript using Next.js.
                        App is fetching data from Twitch API, saves that into MongoDB using Next.js
                        API routes, and renders all data in a modern looking charts and tables.
                    </p>
                </div>
                <ul className={styles.featured__list}>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>SASS</li>
                    <li>Jest</li>
                    <li>Firebase</li>
                </ul>
                <div className={styles.featured__icons}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/rafalnawojczyk/Twitch-Statistics-Project"
                        className={`${styles["featured__icon--first"]} ${styles.featured__link}`}
                    >
                        <GitHubLogo className={`${styles.featured__icon} `} />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitch-statistics.vercel.app/"
                        className={styles.featured__link}
                    >
                        <PreviewIcon className={styles.featured__icon} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
