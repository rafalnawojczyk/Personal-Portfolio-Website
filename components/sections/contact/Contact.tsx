import Button from "../../UI/Button";
import HomepageTitle from "../../UI/HomepageTitle";
import styles from "./Contact.module.scss";

const Contact = () => {
    return (
        <section id="contact" className={styles.contact} aria-labelledby="contactTitle">
            <p className={styles.contact__subtitle}>
                <span>02. </span>
                What&apos;s Next?
            </p>

            <div className={styles["contact__title-wrapper"]}>
                <HomepageTitle
                    className={styles.contact__title}
                    id="contactTitle"
                    title="Get In Touch"
                    subtitle=""
                />
            </div>
            <Button
                title="Say Hello"
                href="mailto:rafalnawojczyk@gmail.com"
                type={"button"}
                className={styles.contact__button}
            ></Button>
        </section>
    );
};

export default Contact;
