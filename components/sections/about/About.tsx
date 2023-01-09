import HomepageTitle from "../../UI/HomepageTitle";
import styles from "./About.module.scss";
import ListOfTechnologies from "./ListOfTechnologies";
import PersonalPhoto from "./PersonalPhoto";

const About = () => {
    return (
        <section className={styles.about} aria-labelledby="aboutme">
            <div>
                <HomepageTitle id="aboutme" title="About me" subtitle="00." />
                <p className={styles.about__description}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit esse tempora
                    amet hic veniam odio modi magnam illum recusandae voluptas at quis est, cum,
                    commodi assumenda laboriosam molestias! Nostrum, rem?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis temporibus
                    nihil laboriosam dolores nobis sunt unde dolore repudiandae maxime, minima
                    exercitationem, nulla eos voluptates perspiciatis eaque ad placeat dolor
                    dignissimos.
                    <br />
                    <br />
                    Here are few technologies I&apos;ve been working with recently:
                </p>
                <ListOfTechnologies
                    list={[
                        "JavaScript (ES6+)",
                        "React.js",
                        "Next.js",
                        "Typescript",
                        "Jest/React Testing Library",
                        "Firebase Auth",
                        "CSS(SASS)",
                        "HTML",
                    ]}
                />
            </div>
            <div className={styles["about__photo-wrapper"]}>
                <PersonalPhoto />
            </div>
        </section>
    );
};

export default About;
