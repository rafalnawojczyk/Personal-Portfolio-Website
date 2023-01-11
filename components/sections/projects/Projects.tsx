import HomepageTitle from "../../UI/HomepageTitle";
import FeaturedProject from "./FeaturedProject";
import styles from "./Projects.module.scss";

const Projects = () => {
    return (
        <section id="about" className={styles.about} aria-labelledby="projects">
            <HomepageTitle id="projects" title="Some Things I&#8217;ve Built" subtitle="01." />
            <FeaturedProject />
        </section>
    );
};

export default Projects;
