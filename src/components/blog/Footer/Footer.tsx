import styles from './Footer.module.scss';
import GithubLogo from './assets/Github';
import TwitterLogo from './assets/Twitter';
import LinkedinLogo from './assets/Linkedin';

export const Footer = () => {
    return (
        <>
            <div className={styles.separator} />
            <footer className={styles.footer}>
                <p className={styles.copyright}>© 2024 Rafal Nawojczyk</p>
                <ul className={styles.wrapper}>
                    <li>
                        <a
                            className={styles.link}
                            aria-label="Link to Rafal Nawojczyk - author github profile - opens in new tab"
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/rafalnawojczyk"
                        >
                            <GithubLogo className={styles.icon} aria-disabled />
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.link}
                            aria-label="Link to Rafal Nawojczyk - author Twitter or new X profile - opens in new tab"
                            target="_blank"
                            rel="noreferrer"
                            href="https://x.com/rafalnawojczyk"
                        >
                            <TwitterLogo className={styles.icon} aria-disabled />
                        </a>
                    </li>
                    <li>
                        <a
                            className={styles.link}
                            aria-label="Link to Rafal Nawojczyk - author Linkedin profile - opens in new tab"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/rafalnawojczyk/"
                        >
                            <LinkedinLogo className={styles.icon} aria-disabled />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    );
};
