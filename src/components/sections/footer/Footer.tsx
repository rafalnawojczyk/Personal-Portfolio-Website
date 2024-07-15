import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/rafalnawojczyk"
                    className={styles.footer__link}
                >
                    Built by Rafal Nawojczyk.
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/bchiang7"
                    className={styles.footer__link}
                >
                    Designed by Brittany Chiang.
                </a>
            </div>
        </footer>
    );
};

export default Footer;
