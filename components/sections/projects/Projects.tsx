import HomepageTitle from "../../UI/HomepageTitle";
import FeaturedProject from "./FeaturedProject";

import {
    twitchStatisticsData,
    minesweeperData,
    game2048Data,
    creativeTimData,
} from "../../../config";

const Projects = () => {
    return (
        <section id="project" aria-labelledby="projects">
            <HomepageTitle id="projects" title="Some Things I&#8217;ve Built" subtitle="01." />
            <FeaturedProject featured={true} side="right" data={twitchStatisticsData} />
            <FeaturedProject featured={false} side="left" data={minesweeperData} />
            <FeaturedProject featured={false} side="right" data={game2048Data} />
            <FeaturedProject featured={false} side="left" data={creativeTimData} />
        </section>
    );
};

export default Projects;
