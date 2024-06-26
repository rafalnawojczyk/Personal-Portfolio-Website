import Image from 'next/image';
import PhotoBox from '../../PhotoBox';
import GitHubLogo from '../../svg/GithubLogo';
import PreviewIcon from '../../svg/PreviewIcon';
import styles from './FeaturedProject.module.scss';

type FeaturedProjectProps = {
    data: {
        githubLink?: string;
        previewLink: string;
        altText: string;
        imageSrc: string;
        projectTitle: string;
        projectDescription: string;
        technologies: string[];
    };
    featured: boolean;
    side: 'left' | 'right';
};

function classComposer(side: 'left' | 'right', className: string) {
    return `${styles[`featured__${className}`]} ${styles[`featured__${className}--${side}`]}`;
}

const FeaturedProject = ({ data, side, featured }: FeaturedProjectProps) => {
    return (
        <div className={styles.featured}>
            <div className={classComposer(side, 'photo')}>
                <PhotoBox>
                    <Image
                        className={styles.featured__image}
                        alt={data.altText}
                        height={462}
                        width={750}
                        src={data.imageSrc}
                        style={{ objectFit: 'contain', height: 'auto' }}
                        loading="lazy"
                    />
                </PhotoBox>
            </div>

            <div className={classComposer(side, 'content')}>
                {featured && <p className={classComposer(side, 'text')}>Featured project</p>}
                <h3 className={classComposer(side, 'heading')}>
                    <a target="_blank" rel="noreferrer" className={styles.featured__title} href={data.previewLink}>
                        {data.projectTitle}
                    </a>
                </h3>
                <div className={styles['featured__description-box']}>
                    <p className={classComposer(side, 'description')}>{data.projectDescription}</p>
                </div>
                <ul className={classComposer(side, 'list')}>
                    {data.technologies.map((el, i) => {
                        return <li key={i}>{el}</li>;
                    })}
                </ul>
                <div className={classComposer(side, 'icons')}>
                    {data.githubLink && (
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={data.githubLink}
                            className={`${styles[`featured__icon--first-${side}`]} ${styles.featured__link}`}
                            aria-label="GitHub link - opens in a new tab"
                        >
                            <GitHubLogo className={`${styles.featured__icon} `} />
                        </a>
                    )}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href={data.previewLink}
                        className={styles.featured__link}
                        aria-label="Live app preview - opens in a new tab"
                    >
                        <PreviewIcon className={styles.featured__icon} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject;
