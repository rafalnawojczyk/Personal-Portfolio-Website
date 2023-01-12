import HomepageTitle from "../../UI/HomepageTitle";
import FeaturedProject from "./FeaturedProject";
import styles from "./Projects.module.scss";
import { twitchStatisticsData, minesweeperData, game2048Data } from "../../../config";

const Projects = () => {
    return (
        <section id="about" className={styles.about} aria-labelledby="projects">
            <HomepageTitle id="projects" title="Some Things I&#8217;ve Built" subtitle="01." />
            <FeaturedProject data={twitchStatisticsData} />
            <FeaturedProject data={minesweeperData} />
            <FeaturedProject data={game2048Data} />
        </section>
    );
};

export default Projects;
