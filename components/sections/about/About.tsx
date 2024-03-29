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
                    Hello! My name is Rafał and I&apos;m from Poland. I really enjoy creating web-apps, learning new
                    technologies.
                    <br />
                    <br />
                    I&apos;m a disciplined, ambitious and creative front-end developer with really various skills. I
                    specialize in React and Next.js, currently diving into back-end development with Node.js and
                    Express, but I will be more than happy to learn new frameworks, like Angular, Vue or React Native.
                    <br />
                    <br />
                    Here are a few technologies I&apos;ve been working with recently:
                </p>
                <ListOfTechnologies
                    list={[
                        'JavaScript (ES6+)',
                        'React.js',
                        'Next.js',
                        'Typescript',
                        'Jest/React Testing Library',
                        'Firebase Auth',
                        'CSS(SASS)',
                        'HTML',
                    ]}
                />
            </div>

            <PersonalPhoto className={styles['about__photo-wrapper']} />
        </section>
    );
};

export default About;
