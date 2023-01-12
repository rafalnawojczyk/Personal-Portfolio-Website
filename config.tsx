import FeaturedProjectModel from "./models/FeaturedProjectModel";
import FeaturedImage from "./public/featured-project.jpg";
import MinesweeperImage from "./public/minesweeper-project.jpg";

export const twitchStatisticsData: FeaturedProjectModel = {
    githubLink: "https://github.com/rafalnawojczyk/Twitch-Statistics-Project",
    previewLink: "https://twitch-statistics.vercel.app/",
    altText: "Preview image showing homepage of Twitch Statistics project website",
    imageSrc: FeaturedImage.src,
    projectTitle: "Twitch Statistics",
    projectDescription: `Advanced full-stack web application, written in Typescript using Next.js.
  App is fetching data from Twitch API, saves that into MongoDB using Next.js
  API routes, and renders all data in a modern looking charts and tables.`,
    technologies: ["Next.js", "React", "Typescript", "SASS", "Jest", "Firebase"],
    side: "right",
};
export const minesweeperData: FeaturedProjectModel = {
    githubLink: "https://github.com/rafalnawojczyk/Minesweeper",
    previewLink: "https://rafalnawojczyk.pl/minesweeper/",
    altText: "Preview image showing Minesweeper game made by Rafal Nawojczyk",
    imageSrc: MinesweeperImage.src,
    projectTitle: "Minesweeper Game",
    projectDescription: `Modern looking Minesweeper game made in Vanilla Javascript using classes, MVC architecture, SASS, private methods and properties. `,
    technologies: ["ES6+ Javascript", "SASS"],
    side: "left",
};
