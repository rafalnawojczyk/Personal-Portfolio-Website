import HomepageTitle from '../../UI/HomepageTitle';
import styles from './About.module.scss';
import ListOfTechnologies from './ListOfTechnologies';
import PersonalPhoto from './PersonalPhoto';

const About = () => {
    return (
        <section id="about" className={styles.about} aria-labelledby="aboutme">
            <HomepageTitle className={styles.about__title} id="aboutme" title="About me" subtitle="00." />
            <div className={styles.about__descbox}>
                <p className={styles.about__description}>
                    Hello! My name is Rafał and I&apos;m from Poland. I really enjoy creating web and mobile apps and learning new
                    technologies.
                    <br />
                    <br />
                    I&apos;m a disciplined, ambitious and creative software engineer with really various skills. I
                    specialize in React and Next.js, mastering React Native with Expo, managing my data in document-based databases and connecting dots on the Back-end with Express.
                    <br />
                    <br />
                    Here are a few technologies I&apos;ve been working with recently:
                </p>
                <ListOfTechnologies
                    list={[
                        'JavaScript / Typescript',
                        'React Native / Expo',
                        'React.js 18+',
                        'Next.js 14+',
                        'Node.js / Express.js',
                        'Jest / Vitest / RTL',
                        'MongoDB / RealmDB / Firebase',
                        'Zustand / Redux',
                        'CSS / SASS / TailwindCSS',
                        'Webflow / Wordpress',
                    ]}
                />
            </div>

            <PersonalPhoto className={styles['about__photo-wrapper']} />
        </section>
    );
};

export default About;
