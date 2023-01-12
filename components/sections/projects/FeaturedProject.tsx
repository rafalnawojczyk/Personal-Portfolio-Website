import Image from "next/image";
import PhotoBox from "../../PhotoBox";
import GitHubLogo from "../../svg/GithubLogo";
import PreviewIcon from "../../svg/PreviewIcon";
import styles from "./FeaturedProject.module.scss";

type FeaturedProjectProps = {
    data: {
        githubLink: string;
        previewLink: string;
        altText: string;
        imageSrc: string;
        projectTitle: string;
        projectDescription: string;
        technologies: string[];
        side: "left" | "right";
    };
};

function classComposer(side: "left" | "right", className: string) {
    return `${styles[`featured__${className}`]} ${styles[`featured__${className}--${side}`]}`;
}

const FeaturedProject = ({ data }: FeaturedProjectProps) => {
    return (
        <div className={styles.featured}>
            <div className={classComposer(data.side, "photo")}>
                <PhotoBox>
                    <Image
                        height={462}
                        width={750}
                        className={styles.featured__image}
                        alt={data.altText}
                        src={data.imageSrc}
                        loading="lazy"
                    />
                </PhotoBox>
            </div>

            <div className={classComposer(data.side, "content")}>
                <p className={classComposer(data.side, "text")}>Featured project</p>
                <h3 className={classComposer(data.side, "heading")}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className={styles.featured__title}
                        href={data.previewLink}
                    >
                        {data.projectTitle}
                    </a>
                </h3>
                <div className={styles["featured__description-box"]}>
                    <p className={classComposer(data.side, "description")}>
                        {data.projectDescription}
                    </p>
                </div>
                <ul className={classComposer(data.side, "list")}>
                    {data.technologies.map((el, i) => {
                        return <li key={i}>{el}</li>;
                    })}
                </ul>
                <div className={classComposer(data.side, "icons")}>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={data.githubLink}
                        className={`${styles[`featured__icon--first-${data.side}`]} ${
                            styles.featured__link
                        }`}
                    >
                        <GitHubLogo className={`${styles.featured__icon} `} />
                    </a>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={data.previewLink}
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
