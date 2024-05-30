import HomepageTitle from '../../UI/HomepageTitle';
import FeaturedProject from './FeaturedProject';

import { twitchStatisticsData, minesweeperData, game2048Data, creativeTimData, cubeRivalsData } from '../../../config';

const Projects = () => {
    return (
        <section id="project" aria-labelledby="projects">
            <HomepageTitle id="projects" title="Some Things I&#8217;ve Built" subtitle="01." />
            <FeaturedProject featured={true} side="right" data={cubeRivalsData} />
            <FeaturedProject featured={false} side="left" data={twitchStatisticsData} />
            <FeaturedProject featured={false} side="right" data={minesweeperData} />
            <FeaturedProject featured={false} side="left" data={game2048Data} />
            <FeaturedProject featured={false} side="right" data={creativeTimData} />
        </section>
    );
};

export default Projects;
