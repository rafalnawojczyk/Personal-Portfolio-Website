import Button from '../../UI/Button';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section aria-labelledby="hero-title" className={styles.hero}>
            <h1 id="hero-title" className={styles.hero__title}>
                Hi, my name is
            </h1>

            <h2 className={styles.hero__subtitle}>Rafał Nawojczyk.</h2>
            <h3 className={`${styles.hero__subtitle} ${styles['hero__subtitle--dark']}`}>
                I&apos;m a Front-End Developer.
            </h3>
            <p className={styles.hero__description}>
                I build things for the web. I specialize in <span className={styles.hero__accent}>React.js</span>,{' '}
                <span className={styles.hero__accent}>Next.js</span> and{' '}
                <span className={styles.hero__accent}>React Native</span>. Currently looking to broaden my skills and
                experience.
            </p>

            <Button
                newTab={true}
                className={styles.hero__button}
                title="Check out my GitHub"
                href="https://github.com/rafalnawojczyk"
            />
        </section>
    );
};

export default Hero;
